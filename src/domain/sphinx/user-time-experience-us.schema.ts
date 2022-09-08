import { Schema } from "mongoose";

const UserTimeExperienceUsDataSchema = new Schema({
    unique_id: String,
    time_experience: String,
    created_at: Number
});

export default UserTimeExperienceUsDataSchema;