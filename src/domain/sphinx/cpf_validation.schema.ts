import { Schema } from "mongoose";

const CpfValidationSchema = new Schema({
    unique_id: String,
    birth_date: Number,
    name: String,
    created_at: Number
});

export default CpfValidationSchema;