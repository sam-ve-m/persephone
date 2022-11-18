import { Schema } from "mongoose";

const GetUserEmployForSchemaTemplateWithDataDataSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    employ_status: String,
    employ_type: String,
    employ_position: String,
    employ_company_name: String,
    created_at: Number,
});

export default GetUserEmployForSchemaTemplateWithDataDataSchema;