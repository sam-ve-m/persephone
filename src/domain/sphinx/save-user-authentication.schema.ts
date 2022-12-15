import { Schema } from "mongoose";

const SaveUserAuthenticationSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    is_active_user: Boolean,
    scope: Object,
    created_at: Number
});

export default SaveUserAuthenticationSchema;