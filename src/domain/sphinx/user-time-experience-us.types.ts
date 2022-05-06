import { Document, Model } from "mongoose";

export interface IUserTimeExperienceUsSchemaData {
    time_experience: String;
    unique_id: String;
}

export interface IUserTimeExperienceUsSchemaDataDocument extends IUserTimeExperienceUsSchemaData, Document {}
export interface IUserTimeExperienceUsSchemaDataModel extends Model<IUserTimeExperienceUsSchemaDataDocument> {}