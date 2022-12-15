import { Document, Model } from "mongoose";

export interface ISaveUserLogout {
    unique_id: String;
    device_id: String;
    device_info: Object;
    jwt: String;
    created_at: Number;
}

export interface ISaveUserLogoutDocument extends ISaveUserLogout, Document {}
export interface ISaveUserLogoutModel extends Model<ISaveUserLogoutDocument> {}