import { Document, Model } from "mongoose";

export interface ISaveUserLogout { }

export interface ISaveUserLogoutDocument extends ISaveUserLogout, Document {}
export interface ISaveUserLogoutModel extends Model<ISaveUserLogoutDocument> {}