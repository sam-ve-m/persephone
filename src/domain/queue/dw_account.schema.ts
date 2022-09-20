import { Schema } from "mongoose";

const DwAccountSchema = new Schema({
    unique_id: String,
    cpf: String,
    dw_account: Object,
    created_at: Number
});

export default DwAccountSchema;