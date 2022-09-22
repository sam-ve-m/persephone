import { Schema } from "mongoose";

const ExchangeAccountSchema = new Schema({
    unique_id: String,
    cpf: String,
    exchange_account: Object,
    created_at: Number
});

export default ExchangeAccountSchema;