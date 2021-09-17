import { Document, Model } from "mongoose";

export interface IHermesSentOrder { }

export interface IHermesSentOrderDocument extends IHermesSentOrder, Document {}
export interface IHermesSentOrderModel extends Model<IHermesSentOrderDocument> {}