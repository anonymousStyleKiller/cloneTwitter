import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { IUserModel, IUserModelDocument, UserModel } from '../models/UserModel';

passport.use(
  new LocalStrategy(
    async (username, password, done): Promise<void> => {
      try {
        const user = await UserModel.findOne({ $or: [{ email: username }, { username }] }).exec();
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        done(err, false);
      }
    },
  ),
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.SECRET_KEY || '123',
      jwtFromRequest: ExtractJwt.fromHeader('token'),
    },
    async (payload, done): Promise<void> => {
      try {
        const user = await UserModel.findById(payload.data._doc._id).exec();
        if (user) {
          return done(null, (user as IUserModelDocument).toObject());
        }
        done(null, false);
      } catch (e) {
        done(e);
      }
    },
  ),
);

passport.serializeUser((user: IUserModel, done) => {
  done(null, user?._id);
});

passport.deserializeUser((id, done) => {
  console.log(id);
  UserModel.findById(id, (err, user) => {
    done(err, user);
  });
});

export { passport };
