import { Document, model, Schema } from 'mongoose';
import { IUserModelDocument } from './UserModel';

export interface ITweetModel {
  _id?: string;
  text: string;
  user: IUserModelDocument;
}

export type ITweetModelDocument = ITweetModel & Document;

const TweetSchema = new Schema<ITweetModel>(
  {
    text: {
      required: true,
      type: String,
    },
    user: {
      required: true,
      ref: 'User',
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  },
);

export const TweetModel = model<ITweetModelDocument>('Tweet', TweetSchema);
