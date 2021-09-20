import { Schema } from "mongoose";

const GaiaSessionMessageSchema = new Schema({
    sessionID: String,
    msgType: String,
    fix: String,
    createdAt: Number
});

export default GaiaSessionMessageSchema;