import { Schema } from "mongoose";

const GetUserCompanyDirectorSchemaTemplateWithDataDataSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    company_director: Boolean,
    company_director_of: String,
    created_at: Number
});

export default GetUserCompanyDirectorSchemaTemplateWithDataDataSchema;