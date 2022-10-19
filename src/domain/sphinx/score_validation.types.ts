import { Document, Model } from "mongoose";

export interface IScoreValidation {
    unique_id: String;
    name: String;
    birth_date: Number;
    gender: String;
    mother_name: String;
    nationality: Number;
    is_politically_exposed_person: Boolean;
    is_correlated_to_politically_exposed_person: Boolean;
    created_at: Number;
}

export interface IScoreValidationDocument extends IScoreValidation, Document {}
export interface IScoreValidationModel extends Model<IScoreValidationDocument> {}