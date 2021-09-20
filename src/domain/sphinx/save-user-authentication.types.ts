import { Document, Model } from "mongoose";

export interface ISaveUserAuthentication {
    user_email: String;
    is_active_user: Boolean;
    scope: JSON;
    created_at: Number;
}

export interface ISaveUserAuthenticationDocument extends ISaveUserAuthentication, Document {}
export interface ISaveUserAuthenticationModel extends Model<ISaveUserAuthenticationDocument> {}