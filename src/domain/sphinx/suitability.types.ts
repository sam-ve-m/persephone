import { Document, Model } from "mongoose";

export interface ISuitability { }

export interface ISuitabilityDocument extends ISuitability, Document {}
export interface ISuitabilityModel extends Model<ISuitabilityDocument> {}