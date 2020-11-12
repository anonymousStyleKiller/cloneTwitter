import express from 'express';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator/src/validation-result';
import { IUserModel, IUserModelDocument, UserModel } from '../models/UserModel';
import { generateMD5 } from '../utils/generateHash';
import { sendEmail } from '../utils/sendEmail';
import { isValidObjectId } from '../utils/isValidObjectTS';

class UserController {
  // Получение всех пользователей +
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find({}).exec();
      const arr = users.map(item=> (item as IUserModelDocument).toObject());
      res.status(200).json({ status: 'success', data: arr });
    } catch (error) {
      res.status(400).json({ status: 'error', errors: JSON.stringify(error) });
    }
  }

  // Получение одного пользователя (без пароля и хеша) +
  async show(req: express.Request, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id;

      if (!isValidObjectId(userId)) {
        res.status(403).send();
        return;
      }

      const item = await UserModel.findById(userId).exec();
      res.status(200).json({ status: 'success', data: (item as IUserModelDocument).toObject() });
    } catch (error) {
      res.status(400).json({ status: 'error', errors: JSON.stringify(error) });
    }
  }

  // Для создания токена, после логина
  async afterLogin(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user ? (req.user as IUserModelDocument).toObject() : undefined;
      const data = {
        ...user,
        token: jwt.sign({ data: req.user }, process.env.SECRET_KEY || 'secretKey', {
          expiresIn: '30 days',
        }),
      };
      res.status(200).json({ status: 'success', data });
    } catch (error) {
      res.status(400).json({ status: 'error', errors: JSON.stringify(error) });
    }
  }

  // Получение данных по токену( если он действителен) +
  async getUserInfo(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user ? (req.user as IUserModel) : undefined;
      res.status(200).json({ status: 'success', data: user });
    } catch (error) {
      res.status(400).json({ status: 'error', errors: JSON.stringify(error) });
    }
  }

  // Создание нового пользователя +
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error', errors: errors.array() });
        return;
      }
      const user: IUserModel = {
        email: req.body.email,
        fullname: req.body.fullname,
        username: req.body.username,
        password: generateMD5(req.body.password + process.env.SECRET_KEY),
        confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
      };

      await UserModel.create(user);
      res
        .status(200)
        .json({
          status: 'success',
          data: user,
        })
        .send();

      sendEmail(
        {
          emailFrom: 'admin@twitter.com',
          emailTo: user.email,
          subject: 'Подтверждение почты Twitter Clone Tutorial',
          html: `Для того что бы подтвердить почту, перейдите 
                       <a href="http://localhost:${process.env.PORT || 8888}/auth/verify?hash=${
            user.confirmHash
          }">по этой ссылке</a>`,
        },
        (err: Error | null) => {
          if (err) {
            res.status(400).json({
              status: 'error',
              message: err,
            });
          }
        },
      );
    } catch (error) {
      res.status(500).json({ status: 'error', message: error });
    }
  }

  // Подтверждение через почту +
  async verify(req: any, res: express.Response): Promise<void> {
    try {
      const hash = req.query.hash;
      if (!hash) {
        res.status(400).send();
      }
      const user = await UserModel.findOne({ confirmHash: hash }).exec();
      if (user) {
        user.confirmed = true;
        user?.save();
        res.json({
          status: 'success',
        });
      } else {
        res.status(404).json({ status: 'error', message: 'Пользователь не найден!' });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', errors: JSON.stringify(error) });
    }
  }
}

export const UserCtrl = new UserController();
