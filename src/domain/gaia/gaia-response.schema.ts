import { Schema } from "mongoose";

const GaiaResponseSchema = new Schema({
    ip: String,
    clOrdID: String,
    sessionID: String,
    receivedFix: String,
    createdAt: Number
});

export default GaiaResponseSchema;