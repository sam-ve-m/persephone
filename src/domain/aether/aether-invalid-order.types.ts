import { Document, Model } from "mongoose";

export interface IAetherInvalidOrder { }

export interface IAetherInvalidOrderDocument extends IAetherInvalidOrder, Document {}
export interface IAetherInvalidOrderModel extends Model<IAetherInvalidOrderDocument> {}