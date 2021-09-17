import { Document, Model } from "mongoose";

export interface ISignedTerm { }

export interface ISignedTermDocument extends ISignedTerm, Document {}
export interface ISignedTermModel extends Model<ISignedTermDocument> {}