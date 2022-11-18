import { Schema } from "mongoose";

const UserSelfieSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    file_path: String,
    geolocation: String,
    ip_address: String,
    device_id: String,
    device_info: Object,
    created_at: Number
});

export default UserSelfieSchema;