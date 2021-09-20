import { Schema } from "mongoose";

const SaveUserAuthenticationSchema = new Schema({
    user_email: String,
    is_active_user: Boolean,
    scope: Object,
    created_at: Number
});

export default SaveUserAuthenticationSchema;