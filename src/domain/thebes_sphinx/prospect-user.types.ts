import { Document, Model } from "mongoose";

export interface IProspectUser {
  user_email: string;
  name: string;
  create_user_timestamp: number;
}

export interface IProspectUserDocument extends IProspectUser, Document {}
export interface IProspectUserModel extends Model<IProspectUserDocument> {}

