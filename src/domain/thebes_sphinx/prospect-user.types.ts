import { Document, Model } from "mongoose";

export interface IProspectUser {
  displayName: String;
  userEmail: String;
  createUserTimeStamp: Number;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}

export interface IProspectUserDocument extends IProspectUser, Document {}
export interface IProspectUserModel extends Model<IProspectUserDocument> {}
