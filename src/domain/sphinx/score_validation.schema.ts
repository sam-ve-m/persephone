import { Schema } from "mongoose";

const ScoreValidationSchema = new Schema({
    unique_id: String,
    name: String,
    birth_date: Number,
    gender: String,
    mother_name: String,
    nationality: Number,
    created_at: Number
});

export default ScoreValidationSchema;