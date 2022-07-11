import { Schema } from "mongoose";

const UpdateBankAccountSchema = new Schema({
    unique_id: String,
    device_info: Object,
    bank_account: Object,
    _created_at: Date,
 });

export default UpdateBankAccountSchema;