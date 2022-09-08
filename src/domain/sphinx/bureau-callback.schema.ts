import { Schema } from "mongoose";

const BureauCallbackSchema = new Schema({
    unique_id: String,
    bureau_data: Object,
    created_at: Number
});

export default BureauCallbackSchema;