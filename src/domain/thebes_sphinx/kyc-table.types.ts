import { Document, Model } from "mongoose";

export interface IKycTable {
  stone_age_id: String;
  user_id: String;
  status: String;
  cpf: Number;
  date_of_entry?: Date;
  last_updated?: Date;
}

export interface IKycTableDocument extends IKycTable, Document {}
export interface IKycTableModel extends Model<IKycTableDocument> {}
