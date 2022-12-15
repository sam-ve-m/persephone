import { Schema } from "mongoose";

const UserIdentifierDataSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    cpf: String,
    cel_phone: String,
    tax_residences: Array,
    created_at: Number,
});

export default UserIdentifierDataSchema;