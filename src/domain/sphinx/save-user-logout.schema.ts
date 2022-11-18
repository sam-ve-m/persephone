import { Schema } from "mongoose";

const SaveUserLogoutSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    jwt: String,
    device_information: Object,
    created_at: Number
});

export default SaveUserLogoutSchema;