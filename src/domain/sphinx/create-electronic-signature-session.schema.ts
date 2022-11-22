import { Schema } from "mongoose";

const CreateElectronicSignatureSessionSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    mist_session: Object,
    allowed: Boolean,
    created_at: Number
});

export default CreateElectronicSignatureSessionSchema;