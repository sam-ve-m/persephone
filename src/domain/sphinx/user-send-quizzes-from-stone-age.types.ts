import { Document, Model } from "mongoose";

export interface IUserSendQuizzesFromStoneAge {
    user_email: String;
    quiz: JSON;
    response: JSON;
    created_at: Number;
}

export interface IUserSendQuizzesFromStoneAgeDocument extends IUserSendQuizzesFromStoneAge, Document {}
export interface IUserSendQuizzesFromStoneAgeModel extends Model<IUserSendQuizzesFromStoneAgeDocument> {}