import { Document, Model } from "mongoose";

export interface ISuitability {
    unique_id: String;
    form: JSON;
    version: Number;
    score: Number;
    profile: String;
    created_at: Number;
}

export interface ISuitabilityDocument extends ISuitability, Document {}
export interface ISuitabilityModel extends Model<ISuitabilityDocument> {}