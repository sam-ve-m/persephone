import { Schema } from "mongoose";

const GetUserTaxResidencesSchemaTemplateWithDataData = new Schema({
    tax_residences: Array,
    unique_id: String,
});

export default GetUserTaxResidencesSchemaTemplateWithDataData;