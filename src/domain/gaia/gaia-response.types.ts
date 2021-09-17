import { Document, Model } from "mongoose";

export interface IGaiaResponse { }

export interface IGaiaResponseDocument extends IGaiaResponse, Document {}
export interface IGaiaResponseModel extends Model<IGaiaResponseDocument> {}