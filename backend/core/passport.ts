import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";
import {ExtractJwt, Strategy as JWTStrategy} from "passport-jwt";
import {IUserModel, UserModel} from "../models/UserModel";
import {generateMD5} from "../utils/generateHash";


passport.use(new LocalStrategy(async (username, password, done): Promise<void> => {
        try {
            const user = await UserModel.findOne({$or: [{email: username}, {username}]}).exec();
            if (!user) {
                return done(null, false);
            }
            if (user.password === generateMD5(password + process.env.SECRET_KEY)) {
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (err) {
            done(err, false);
        }
    }
));

passport.use(new JWTStrategy({
        secretOrKey: process.env.SECRET_KEY || "123",
        jwtFromRequest: ExtractJwt.fromHeader("token")
    }, async (payload: { data: IUserModel }, done) => {
        try {
            const user = await UserModel.findById(payload.data._id).exec();
            if (user) {
                done(null, user)
            }
            done(null, false)
        } catch (e) {
            done(e);
        }
    }
))

passport.serializeUser((user: IUserModel, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err, user) => {
        done(err, user);
    });
});

export {passport};