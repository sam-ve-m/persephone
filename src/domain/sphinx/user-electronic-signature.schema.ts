import { Schema } from "mongoose";

const UserElectronicSignatureSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    electronic_signature: String,
    is_blocked_electronic_signature: Boolean,
    electronic_signature_wrong_attempts: Number,
    created_at: Number
});

export default UserElectronicSignatureSchema;