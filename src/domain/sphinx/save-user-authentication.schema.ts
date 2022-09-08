import { Schema } from "mongoose";

const SaveUserAuthenticationSchema = new Schema({
    unique_id: String,
    is_active_user: Boolean,
    scope: Object,
    created_at: Number
});

export default SaveUserAuthenticationSchema;