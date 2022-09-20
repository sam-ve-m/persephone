import { Schema } from "mongoose";

const ScoreValidationStatusSchema = new Schema({
    unique_id: String,
    status: String,
    created_at: Number
});

export default ScoreValidationStatusSchema;