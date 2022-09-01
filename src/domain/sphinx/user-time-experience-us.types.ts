import { Document, Model } from "mongoose";

export interface IUserTimeExperienceUsData {
    time_experience: String;
    unique_id: String;
    created_at: Number;

}

export interface IUserTimeExperienceUsDataDocument extends IUserTimeExperienceUsData, Document {}
export interface IUserTimeExperienceUsDataModel extends Model<IUserTimeExperienceUsDataDocument> {}