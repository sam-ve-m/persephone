import { Document, Model } from "mongoose";

export interface IProspectUser {
  user_email: String;
  display_name: String;
  create_user_time_stamp: Number;
  date_of_entry?: Date;
  last_updated?: Date;
}

export interface IProspectUserDocument extends IProspectUser, Document {}
export interface IProspectUserModel extends Model<IProspectUserDocument> {}
