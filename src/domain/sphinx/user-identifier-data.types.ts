import { Document, Model } from "mongoose";

export interface IUserIdentifierData { }

export interface IUserIdentifierDataDocument extends IUserIdentifierData, Document {}
export interface IUserIdentifierDataModel extends Model<IUserIdentifierDataDocument> {}