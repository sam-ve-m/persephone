import { Schema } from "mongoose";

const AetherOrderSchema = new Schema({
     ip: String,
     clOrdID: String,
     json: Object,
     fix: String,
     createdAt: Number
});

export default AetherOrderSchema;