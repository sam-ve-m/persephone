import { Schema } from "mongoose";

const GetW8FormConfirmationSchemaTemplateWithDataDataSchema = new Schema({
    unique_id: String,
    w8_form_confirmation: Boolean,
    created_at: Number
});

export default GetW8FormConfirmationSchemaTemplateWithDataDataSchema;