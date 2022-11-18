import { Schema } from "mongoose";

const CpfValidationStatusSchema = new Schema({
    unique_id: String,
    status: String,
    created_at: Number
});

export default CpfValidationStatusSchema;