import { Schema } from "mongoose";

const UserSelfieSchema = new Schema({
    user_email: String,
    file_path: String,
    created_at: Number
});

export default UserSelfieSchema;