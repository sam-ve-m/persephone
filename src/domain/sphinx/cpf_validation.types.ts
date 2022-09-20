import { Document, Model } from "mongoose";

export interface ICpfValidation {
    unique_id: String;
    birth_date: Number;
    name: String;
    created_at: Number;
}

export interface ICpfValidationDocument extends ICpfValidation, Document {}
export interface ICpfValidationModel extends Model<ICpfValidationDocument> {}