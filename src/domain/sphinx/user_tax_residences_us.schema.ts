import { Schema } from "mongoose";

const GetUserTaxResidencesSchemaTemplateWithDataDataSchema = new Schema({
    unique_id: String,
    tax_residences: Array,
    created_at: Number,
});

export default GetUserTaxResidencesSchemaTemplateWithDataDataSchema;