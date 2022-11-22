import { Schema } from "mongoose";

const PldSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    score: Number,
    rating: String,
    approval: Boolean,
    user_data: Object,
    validations: Object,
    created_at: Number
});

export default PldSchema;