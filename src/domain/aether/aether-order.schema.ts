import { Schema } from "mongoose";

const AetherOrderSchema = new Schema({
     ip: String,
     clOrdID: String,
     json: Object,
     fix: String,
     created_at: Number
});

export default AetherOrderSchema;