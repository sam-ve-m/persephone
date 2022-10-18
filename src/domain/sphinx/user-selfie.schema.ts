import { Schema } from "mongoose";

const UserSelfieSchema = new Schema({
    unique_id: String,
    file_path: String,
    device_info: String,
    created_at: Number
});

export default UserSelfieSchema;