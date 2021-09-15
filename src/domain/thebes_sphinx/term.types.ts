import { Document, Model } from "mongoose";

export interface ITerm {
  metadata: {
    user_email: string;
  };
  term_type: string;
  term_version: string;
  user_accept: boolean;
  term_answer_timestamp: number;
}

export interface ITermDocument extends ITerm, Document {}
export interface ITermModel extends Model<ITermDocument> {}
