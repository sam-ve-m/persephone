import { Document, Model } from "mongoose";

export interface ISuitability {
    unique_id: String;
    device_id: String;
    device_info: Object;
    form: JSON;
    version: Number;
    score: Number;
    profile: Number;
    created_at: Number;
}

export interface ISuitabilityDocument extends ISuitability, Document {}
export interface ISuitabilityModel extends Model<ISuitabilityDocument> {}