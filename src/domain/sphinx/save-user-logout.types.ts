import { Document, Model } from "mongoose";

export interface ISaveUserLogout {
    unique_id: String;
    jwt: String;
    device_information: JSON,
    created_at: Number;
}

export interface ISaveUserLogoutDocument extends ISaveUserLogout, Document {}
export interface ISaveUserLogoutModel extends Model<ISaveUserLogoutDocument> {}