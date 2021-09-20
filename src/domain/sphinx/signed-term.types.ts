import { Document, Model } from "mongoose";

export interface ISignedTerm {
    user_email: String;
    term_type: String;
    term_version: String;
    user_accept: Boolean;
    term_answer_time_stamp: Number;
    created_at: Number;
}

export interface ISignedTermDocument extends ISignedTerm, Document {}
export interface ISignedTermModel extends Model<ISignedTermDocument> {}