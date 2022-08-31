import { Schema } from "mongoose";

const UpdateBankAccountSchema = new Schema({
    unique_id: String,
    device_info: Object,
    bank_account: Object,
    created_at: Number
 });

export default UpdateBankAccountSchema;