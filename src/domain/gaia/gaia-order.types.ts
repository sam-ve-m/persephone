import { Document, Model } from "mongoose";

export interface IGaiaOrder { }

export interface IGaiaOrderDocument extends IGaiaOrder, Document {}
export interface IGaiaOrderModel extends Model<IGaiaOrderDocument> {}