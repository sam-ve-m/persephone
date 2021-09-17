import { Document, Model } from "mongoose";

export interface IUserSelfie { }

export interface IUserSelfieDocument extends IUserSelfie, Document {}
export interface IUserSelfieModel extends Model<IUserSelfieDocument> {}