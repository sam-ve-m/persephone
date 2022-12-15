import { Schema } from "mongoose";

const GetW8FormConfirmationSchemaTemplateWithDataDataSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    w8_form_confirmation: Boolean,
    created_at: Number
});

export default GetW8FormConfirmationSchemaTemplateWithDataDataSchema;