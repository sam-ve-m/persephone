import { Document, Model } from "mongoose";

export interface IBureauCallback { }

export interface IBureauCallbackDocument extends IBureauCallback, Document {}
export interface IBureauCallbackModel extends Model<IBureauCallbackDocument> {}