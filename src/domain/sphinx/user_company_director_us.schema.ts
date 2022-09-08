import { Schema } from "mongoose";

const GetUserCompanyDirectorSchemaTemplateWithDataDataSchema = new Schema({
    unique_id: String,
    company_director: Boolean,
    company_director_of: String,
    created_at: Number
});

export default GetUserCompanyDirectorSchemaTemplateWithDataDataSchema;