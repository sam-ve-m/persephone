import { Schema } from "mongoose";

const BureauCallbackSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    bureau_data: Object,
    created_at: Number
});

export default BureauCallbackSchema;