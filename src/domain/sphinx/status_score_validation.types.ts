import { Document, Model } from "mongoose";

export interface IScoreValidationStatus {
    unique_id: String;
    status: String;
    created_at: Number;
}

export interface IScoreValidationStatusDocument extends IScoreValidationStatus, Document {}
export interface IScoreValidationStatusModel extends Model<IScoreValidationStatusDocument> {}