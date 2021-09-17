import { Document, Model } from "mongoose";

export interface ISaveUserAuthentication { }

export interface ISaveUserAuthenticationDocument extends ISaveUserAuthentication, Document {}
export interface ISaveUserAuthenticationModel extends Model<ISaveUserAuthenticationDocument> {}