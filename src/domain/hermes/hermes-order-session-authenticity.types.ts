import { Document, Model } from "mongoose";

export interface IHermesOrderSessionAuthenticity { }

export interface IHermesOrderSessionAuthenticityDocument extends IHermesOrderSessionAuthenticity, Document {}
export interface IHermesOrderSessionAuthenticityModel extends Model<IHermesOrderSessionAuthenticityDocument> {}