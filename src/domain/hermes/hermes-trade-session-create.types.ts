import { Document, Model } from "mongoose";

export interface IHermesTradeSessionCreate { }

export interface IHermesTradeSessionCreateDocument extends IHermesTradeSessionCreate, Document {}
export interface IHermesTradeSessionCreateModel extends Model<IHermesTradeSessionCreateDocument> {}