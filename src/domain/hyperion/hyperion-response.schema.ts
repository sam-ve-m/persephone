import { Schema } from "mongoose";

const HyperionResponseSchema = new Schema({
    ip: String,
    clOrdID: String,
    sessionID: String,
    fix: String,
    json: Object,
    createdAt: Number
});

export default HyperionResponseSchema;