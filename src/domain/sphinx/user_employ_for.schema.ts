import { Schema } from "mongoose";

const GetUserEmployForSchemaTemplateWithDataDataSchema = new Schema({
    employ_status: String,
    employ_type: String,
    employ_position: String,
    employ_company_name: String,
    created_at: Number,
    unique_id: String,
});

export default GetUserEmployForSchemaTemplateWithDataDataSchema;