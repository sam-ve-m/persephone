import { Schema } from "mongoose";

const AetherInvalidOrderSchema = new Schema({
    ip: String,
    clOrdID: String,
    json: Object,
    validationMessage: String,
    created_at: Number
});

export default AetherInvalidOrderSchema;