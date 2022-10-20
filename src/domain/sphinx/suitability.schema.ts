import { Schema } from "mongoose";

const SuitabilitySchema = new Schema({
    unique_id: String,
    form: Object,
    version: Number,
    score: Number,
    profile: Number,
    created_at: Number
});

export default SuitabilitySchema;