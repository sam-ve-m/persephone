import { Document, Model } from "mongoose";

export interface ICpfValidation {
    unique_id: String;
    device_id: String;
    device_info: Object;
    birth_date: Number;
    name: String;
    created_at: Number;
}

export interface ICpfValidationDocument extends ICpfValidation, Document {}
export interface ICpfValidationModel extends Model<ICpfValidationDocument> {}