import {model, Schema, Document} from "mongoose";

export interface IUserModel {
    email: string;
    fullname: string;
    username: string;
    password: string;
    confirmHash: string;
    confirmed?: boolean;
    location?: string;
    about?: string;
    website?: string;
}

type IUserModalDocument = IUserModel & Document;

const UserSchema = new Schema({
    email:{
        unique: true,
        required: true,
        type: String
    },
    fullname:{
        required: true,
        type: String
    },
    username:{
        unique: true,
        required: true,
        type: String
    },
    password:{
        unique: true,
        type: String
    },
    confirmHash:{
        required: true,
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    location: String,
    about: String,
    website: String,
});

export const UserModel = model<IUserModalDocument>('User', UserSchema);
