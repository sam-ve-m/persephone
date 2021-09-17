import { Document, Model } from "mongoose";

export interface IUserElectronicSignature { }

export interface IUserElectronicSignatureDocument extends IUserElectronicSignature, Document {}
export interface IUserElectronicSignatureModel extends Model<IUserElectronicSignatureDocument> {}