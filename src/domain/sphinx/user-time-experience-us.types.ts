import { Document, Model } from "mongoose";

export interface IUserTimeExperienceUsData {
    unique_id: String;
    device_id: String;
    device_info: Object;
    time_experience: String;
    created_at: Number;

}

export interface IUserTimeExperienceUsDataDocument extends IUserTimeExperienceUsData, Document {}
export interface IUserTimeExperienceUsDataModel extends Model<IUserTimeExperienceUsDataDocument> {}