import { Schema } from "mongoose";

const DwAccountSchema = new Schema({
    unique_id: String,
    account: String,
    display_account: String,
    created_at: Number
});

export default DwAccountSchema;