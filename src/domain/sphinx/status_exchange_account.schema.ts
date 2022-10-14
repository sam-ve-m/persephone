import { Schema } from "mongoose";

const ExchangeAccountStatusSchema = new Schema({
    unique_id: String,
    status: String,
    created_at: Number
});

export default ExchangeAccountStatusSchema;