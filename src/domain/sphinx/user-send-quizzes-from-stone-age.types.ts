import { Document, Model } from "mongoose";

export interface IUserSendQuizzesFromStoneAge { }

export interface IUserSendQuizzesFromStoneAgeDocument extends IUserSendQuizzesFromStoneAge, Document {}
export interface IUserSendQuizzesFromStoneAgeModel extends Model<IUserSendQuizzesFromStoneAgeDocument> {}