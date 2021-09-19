import { Schema } from "mongoose";

const GaiaOrderSchema = new Schema({
    ip: String,
    clOrdID: String,
    sessionID: String,
    receivedFix: String,
    sentFix: String,
    createdAt: Number
});

export default GaiaOrderSchema;