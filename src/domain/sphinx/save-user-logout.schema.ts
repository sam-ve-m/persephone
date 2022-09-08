import { Schema } from "mongoose";

const SaveUserLogoutSchema = new Schema({
    unique_id: String,
    jwt: String,
    device_information: Object,
    created_at: Number
});

export default SaveUserLogoutSchema;