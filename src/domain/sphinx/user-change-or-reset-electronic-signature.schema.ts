import { Schema } from "mongoose";

const UserChangeOrResetElectronicSignatureSchema = new Schema({
    unique_id: String,
    previous_electronic_signature: String,
    previous_is_blocked_electronic_signature: Boolean,
    previous_electronic_signature_wrong_attempts: Number,
    new_electronic_signature: String,
    new_is_blocked_electronic_signature: Boolean,
    new_electronic_signature_wrong_attempts: Number,
    created_at: Number
});

export default UserChangeOrResetElectronicSignatureSchema;