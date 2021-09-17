import { Document, Model } from "mongoose";

export interface IHermesReceivedOrder { }

export interface IHermesReceivedOrderDocument extends IHermesReceivedOrder, Document {}
export interface IHermesReceivedOrderModel extends Model<IHermesReceivedOrderDocument> {}