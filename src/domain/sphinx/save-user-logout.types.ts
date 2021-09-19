import { Document, Model } from "mongoose";

export interface ISaveUserLogout {
    user_email: String;
    jwt: String;
    created_at: Number;
}

export interface ISaveUserLogoutDocument extends ISaveUserLogout, Document {}
export interface ISaveUserLogoutModel extends Model<ISaveUserLogoutDocument> {}