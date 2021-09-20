import { Document, Model } from "mongoose";

export interface ISuitability {
    user_email: String;
    form: JSON;
    version: Number;
    score: Number;
    profile: Number;
    create_suitability_time_stamp: Number;
    created_at: Number;
}

export interface ISuitabilityDocument extends ISuitability, Document {}
export interface ISuitabilityModel extends Model<ISuitabilityDocument> {}