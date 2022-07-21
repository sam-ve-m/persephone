import { Schema } from "mongoose";

const RegisterBankAccountSchema = new Schema({
    unique_id: String,
    device_info: Object,
    bank_account: Object,
    _created_at: Date,
 });

export default RegisterBankAccountSchema;