import { Schema } from "mongoose";

const BureauCallbackSchema = new Schema({
    user_email: String,
    bureau_data: Object,
    created_at: Number
});

export default BureauCallbackSchema;