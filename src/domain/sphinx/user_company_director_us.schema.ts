import { Schema } from "mongoose";

const GetUserCompanyDirectorSchemaTemplateWithDataData = new Schema({
    company_director: Boolean,
    company_director_from: String,
    unique_id: String
});

export default GetUserCompanyDirectorSchemaTemplateWithDataData;