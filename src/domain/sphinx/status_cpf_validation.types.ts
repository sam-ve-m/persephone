import { Document, Model } from "mongoose";

export interface ICpfValidationStatus {
    unique_id: String;
    device_id: String;
    device_info: Object;
    status: String;
    created_at: Number;
}

export interface ICpfValidationStatusDocument extends ICpfValidationStatus, Document {}
export interface ICpfValidationStatusModel extends Model<ICpfValidationStatusDocument> {}