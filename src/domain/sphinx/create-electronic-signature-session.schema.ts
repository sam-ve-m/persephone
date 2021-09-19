import { Schema } from "mongoose";

const CreateElectronicSignatureSessionSchema = new Schema({
    user_email: String,
    mist_session: String,
    allowed: Boolean,
    created_at: Number
});

export default CreateElectronicSignatureSessionSchema;