import { Document, Model } from "mongoose";

export interface ISignedTerm {
    unique_id: String;
    terms_type: Array<String>;
    terms_update: Object;
    user_accept: Boolean;
    created_at: Number;
}

export interface ISignedTermDocument extends ISignedTerm, Document {}
export interface ISignedTermModel extends Model<ISignedTermDocument> {}