import { Document, Model } from "mongoose";

export interface IUserUpdateRegisterData {
  user_email: String;
  modified_register_data: Object;
  update_customer_registration_data: Object;
  created_at: Number;
}

export interface IUserUpdateRegisterDataDocument extends IUserUpdateRegisterData, Document {}
export interface IUserUpdateRegisterDataModel extends Model<IUserUpdateRegisterDataDocument> {}