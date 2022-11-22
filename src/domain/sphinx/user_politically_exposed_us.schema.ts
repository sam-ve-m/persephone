import { Schema } from "mongoose";

const UserPoliticallyExposedUSSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    politically_exposed: Boolean,
    politically_exposed_names: Array,
    created_at: Number,
});

export default UserPoliticallyExposedUSSchema;