import { Document, Model } from "mongoose";

export interface IUserGetQuizzesFromStoneAge {
    user_email: String;
    output: JSON;
    created_at: Number;
}

export interface IUserGetQuizzesFromStoneAgeDocument extends IUserGetQuizzesFromStoneAge, Document {}
export interface IUserGetQuizzesFromStoneAgeModel extends Model<IUserGetQuizzesFromStoneAgeDocument> {}