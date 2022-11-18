import { Document, Model } from "mongoose";

export interface IUserSelfie {
    unique_id: String;
    device_id: String;
    device_info: Object;
    file_path: String;
    geolocation: String;
    ip_address: String;
    device_id: String;
    device_info: Object;
    created_at: Number;
}

export interface IUserSelfieDocument extends IUserSelfie, Document {}
export interface IUserSelfieModel extends Model<IUserSelfieDocument> {}