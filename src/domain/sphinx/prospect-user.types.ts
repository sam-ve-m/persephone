import { Document, Model } from "mongoose";

export interface IProspectUser { }

export interface IProspectUserDocument extends IProspectUser, Document {}
export interface IProspectUserModel extends Model<IProspectUserDocument> {}