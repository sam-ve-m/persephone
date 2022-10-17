import { Schema } from "mongoose";

const PldSchema = new Schema({
    unique_id: String,
    score: Number,
    rating: String,
    approval: Boolean,
    validations: Object,
    created_at: Number
});

export default PldSchema;