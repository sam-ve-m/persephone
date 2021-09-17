import { Document, Model } from "mongoose";

export interface ICreateElectronicSignatureSession { }

export interface ICreateElectronicSignatureSessionDocument extends ICreateElectronicSignatureSession, Document {}
export interface ICreateElectronicSignatureSessionModel extends Model<ICreateElectronicSignatureSessionDocument> {}