import { Schema } from "mongoose";

const GetW8FormConfirmationSchemaTemplateWithDataDataSchema = new Schema({
    w8_form_confirmation: String,
    unique_id: String,
    created_at: Number
});

export default GetW8FormConfirmationSchemaTemplateWithDataDataSchema;