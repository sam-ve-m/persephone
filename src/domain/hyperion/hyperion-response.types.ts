import { Document, Model } from "mongoose";

export interface IHyperionResponse { }

export interface IHyperionResponseDocument extends IHyperionResponse, Document {}
export interface IHyperionResponseModel extends Model<IHyperionResponseDocument> {}