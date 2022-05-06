import { Schema } from "mongoose";

const GetUserEmployForSchemaTemplateWithDataData = new Schema({
    employ_status: String,
    employ_type: String,
    employ_position: String,
    employ_company_name: String,
    unique_id: String,
});

export default GetUserEmployForSchemaTemplateWithDataData;