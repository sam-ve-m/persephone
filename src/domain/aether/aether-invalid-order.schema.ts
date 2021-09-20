import { Schema } from "mongoose";

const AetherInvalidOrderSchema = new Schema({
    ip: String,
    clOrdID: String,
    json: Object,
    validationMessage: String,
    createdAt: Number
});

export default AetherInvalidOrderSchema;