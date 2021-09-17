import { Document, Model } from "mongoose";

export interface IGaiaSessionMessage { }

export interface IGaiaSessionMessageDocument extends IGaiaSessionMessage, Document {}
export interface IGaiaSessionMessageModel extends Model<IGaiaSessionMessageDocument> {}