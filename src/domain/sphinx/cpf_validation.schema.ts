import { Schema } from "mongoose";

const CpfValidationSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    birth_date: Number,
    name: String,
    created_at: Number
});

export default CpfValidationSchema;