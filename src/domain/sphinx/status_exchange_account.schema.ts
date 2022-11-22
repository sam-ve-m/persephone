import { Schema } from "mongoose";

const ExchangeAccountStatusSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    status: String,
    created_at: Number
});

export default ExchangeAccountStatusSchema;