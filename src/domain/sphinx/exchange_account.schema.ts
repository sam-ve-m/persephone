import { Schema } from "mongoose";

const ExchangeAccountSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    cpf: String,
    exchange_account: Object,
    created_at: Number
});

export default ExchangeAccountSchema;