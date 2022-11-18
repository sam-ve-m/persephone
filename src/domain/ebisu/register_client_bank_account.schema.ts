import { Schema } from "mongoose";

const RegisterBankAccountSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    device_info: Object,
    bank_account: Object,
    created_at: Number
 });

export default RegisterBankAccountSchema;