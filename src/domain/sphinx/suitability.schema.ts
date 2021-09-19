import { Schema } from "mongoose";

const SuitabilitySchema = new Schema({
    user_email: String,
    form: Object,
    version: Number,
    score: Number,
    profile: Number,
    create_suitability_time_stamp: Number,
    created_at: Number
});

export default SuitabilitySchema;