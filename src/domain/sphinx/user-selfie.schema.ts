import { Schema } from "mongoose";

const UserSelfieSchema = new Schema({
    unique_id: String,
    file_path: String,
    created_at: Number
});

export default UserSelfieSchema;