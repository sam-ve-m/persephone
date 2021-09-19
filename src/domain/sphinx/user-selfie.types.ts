import { Document, Model } from "mongoose";

export interface IUserSelfie {
    user_email: String;
    file_path: String;
    created_at: Number;
}

export interface IUserSelfieDocument extends IUserSelfie, Document {}
export interface IUserSelfieModel extends Model<IUserSelfieDocument> {}