import { Document, Model } from "mongoose";

export interface IHermesOrderSessionAuthenticity {
  ip: String;
  ,
  ,  device_id: String;
  device_info: Object;
  jwt: String;
  is_authentic: Boolean;
  connection_unique_id: String;
  created_at: Number;
}

export interface IHermesOrderSessionAuthenticityDocument
  extends IHermesOrderSessionAuthenticity,
    Document {}
export interface IHermesOrderSessionAuthenticityModel
  extends Model<IHermesOrderSessionAuthenticityDocument> {}
