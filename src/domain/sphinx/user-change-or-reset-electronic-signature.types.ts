import { Document, Model } from "mongoose";

export interface IUserChangeOrResetElectronicSignature { }

export interface IUserChangeOrResetElectronicSignatureDocument extends IUserChangeOrResetElectronicSignature, Document {}
export interface IUserChangeOrResetElectronicSignatureModel extends Model<IUserChangeOrResetElectronicSignatureDocument> {}