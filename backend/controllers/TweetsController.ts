import express from 'express';
import mongoose from 'mongoose';
import { ITweetModelDocument, TweetModel } from '../models/TweetModal';
import { IUserModel } from '../models/UserModel';
import { validationResult } from 'express-validator/src/validation-result';

const isValidObjectId = mongoose.Types.ObjectId.isValid;

class TweetsController {
  // получение всех твитов +
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const tweets = await TweetModel.find({}).populate('user').sort({ createdAt: 1 }).exec();
      const arr =  tweets.map(item=> (item as ITweetModelDocument).toObject())
      res.status(200).json({
        status: 'success',
        data: arr,
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        errors: JSON.stringify(error),
      });
    }
  }

  // отображение одного твива +
  async show(req: express.Request, res: express.Response): Promise<void> {
    try {
      const tweetId = req.params.id;

      if (!isValidObjectId(tweetId)) {
        res.status(404).send();
        return;
      }
      const tweet = await TweetModel.findById(tweetId).populate('user').exec();
      res.status(200).json({
        status: 'success',
        data: (tweet as ITweetModelDocument).toObject(),
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        errors: JSON.stringify(error),
      });
    }
  }

  // создание  твита +
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user as IUserModel;
      if (user?._id) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          res.status(400).json({
            status: 'error',
            errors: errors.array(),
          });
          return;
        }
        // Поправить типизацию
        const data: any = {
          text: req.body.text,
          user: user._id,
        };

        const tweet = await (await TweetModel.create(data)).populate('user').execPopulate();
        res.status(200).json({
          status: 'success',
          data: (tweet as ITweetModelDocument).toObject(),
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        errors: JSON.stringify(error),
      });
    }
  }

  // удаление твита +
  async delete(req: express.Request, res: express.Response): Promise<void> {
    const user = req.user as IUserModel;
    try {
      if (user) {
        const tweetId = req.params.id;

        if (!isValidObjectId(tweetId)) {
          res.status(404).send();
          return;
        }

        const tweet = await TweetModel.findById(tweetId);

        if (tweet) {
          if (String(tweet.user) === String(user._id)) {
            tweet.remove();
            res.send();
          } else {
            res.status(403).send();
          }
        } else {
          res.status(404).send();
        }
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        errors: JSON.stringify(error),
      });
    }
  }

  // обновление твита +
  async update(req: express.Request, res: express.Response): Promise<void> {
    const user = req.user as IUserModel;

    try {
      if (user) {
        const tweetId = req.params.id;

        if (!isValidObjectId(tweetId)) {
          res.status(404).send();
          return;
        }

        const tweet = await TweetModel.findById(tweetId);

        if (tweet) {
          if (String(tweet.user) === String(user._id)) {
            tweet.text = req.body.text;
            res.send();
          } else {
            res.status(403).send();
          }
        } else {
          res.status(404).send();
        }
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        errors: JSON.stringify(error),
      });
    }
  }
}

export const TweetsCtrl = new TweetsController();
