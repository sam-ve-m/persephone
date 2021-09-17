import { Document, Model } from "mongoose";

export interface IAetherOrder { }

export interface IAetherOrderDocument extends IAetherOrder, Document {}
export interface IAetherOrderModel extends Model<IAetherOrderDocument> {}