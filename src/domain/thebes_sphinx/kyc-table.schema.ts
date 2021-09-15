import { Schema } from "mongoose";

const KycTableSchema = new Schema({
  stone_age_id: { type: String },
  user_id: { type: String },
  status: { type: String },
  cpf: { type: Number },
});

export default KycTableSchema;
