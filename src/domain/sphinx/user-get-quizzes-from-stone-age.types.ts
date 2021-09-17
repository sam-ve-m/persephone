import { Document, Model } from "mongoose";

export interface IUserGetQuizzesFromStoneAge { }

export interface IUserGetQuizzesFromStoneAgeDocument extends IUserGetQuizzesFromStoneAge, Document {}
export interface IUserGetQuizzesFromStoneAgeModel extends Model<IUserGetQuizzesFromStoneAgeDocument> {}