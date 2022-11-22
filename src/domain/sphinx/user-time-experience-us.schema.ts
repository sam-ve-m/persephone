import { Schema } from "mongoose";

const UserTimeExperienceUsDataSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    time_experience: String,
    created_at: Number
});

export default UserTimeExperienceUsDataSchema;