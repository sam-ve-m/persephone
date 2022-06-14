import { Schema } from "mongoose";

const GetUserTaxResidencesSchemaTemplateWithDataDataSchema = new Schema({
    tax_residences: Array,
    unique_id: String,
});

export default GetUserTaxResidencesSchemaTemplateWithDataDataSchema;