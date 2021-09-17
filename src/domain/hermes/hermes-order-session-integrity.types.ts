import { Document, Model } from "mongoose";

export interface IHermesOrderSessionIntegrity { }

export interface IHermesOrderSessionIntegrityDocument extends IHermesOrderSessionIntegrity, Document {}
export interface IHermesOrderSessionIntegrityModel extends Model<IHermesOrderSessionIntegrityDocument> {}