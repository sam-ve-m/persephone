
import { Document, Model } from "mongoose";

export interface IAdmin {
    fix: string
}

export interface IAdminDocument extends IAdmin, Document {}
export interface IAdminModel extends Model<IAdminDocument> {}

