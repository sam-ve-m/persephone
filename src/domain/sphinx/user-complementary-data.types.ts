import { Document, Model } from "mongoose";

export interface IUserComplementaryData { }

export interface IUserComplementaryDataDocument extends IUserComplementaryData, Document {}
export interface IUserComplementaryDataModel extends Model<IUserComplementaryDataDocument> {}