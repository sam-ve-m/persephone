import { Schema } from "mongoose";

const GetUserTaxResidencesSchemaTemplateWithDataDataSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    tax_residences: Array,
    created_at: Number,
});

export default GetUserTaxResidencesSchemaTemplateWithDataDataSchema;