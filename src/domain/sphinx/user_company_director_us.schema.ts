import { Schema } from "mongoose";

const GetUserCompanyDirectorSchemaTemplateWithDataData = new Schema({
    company_director: String,
    company_director_from: Boolean,
    unique_id: String
});

export default GetUserCompanyDirectorSchemaTemplateWithDataData;