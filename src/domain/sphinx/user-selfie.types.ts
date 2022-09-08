import { Document, Model } from "mongoose";

export interface IUserSelfie {
    unique_id: String;
    file_path: String;
    created_at: Number;
}

export interface IUserSelfieDocument extends IUserSelfie, Document {}
export interface IUserSelfieModel extends Model<IUserSelfieDocument> {}