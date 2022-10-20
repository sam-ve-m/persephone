import { Document, Model } from "mongoose";

export interface IPld {
    unique_id: String;
    score: Number;
    rating: String;
    approval: Boolean;
    user_data: Object;
    validations: Object;
    created_at: Number;
}

export interface IPldDocument extends IPld, Document {}
export interface IPldModel extends Model<IPldDocument> {}