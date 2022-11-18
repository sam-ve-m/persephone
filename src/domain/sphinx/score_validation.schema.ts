import { Schema } from "mongoose";

const ScoreValidationSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    name: String,
    birth_date: Number,
    gender: String,
    mother_name: String,
    nationality: Number,
    is_politically_exposed_person: Boolean,
    is_correlated_to_politically_exposed_person: Boolean,
    created_at: Number
});

export default ScoreValidationSchema;