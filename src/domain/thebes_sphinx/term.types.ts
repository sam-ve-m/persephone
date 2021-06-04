import { Document, Model } from "mongoose";

export interface ITerm {
  metadata: {
    user_email: String;
  };
  term_type: String;
  term_version: String;
  user_accept: Boolean;
  term_answer_time_stamp: Number;
  term_link: String;
}

export interface ITermDocument extends ITerm, Document {}
export interface ITermModel extends Model<ITermDocument> {}
