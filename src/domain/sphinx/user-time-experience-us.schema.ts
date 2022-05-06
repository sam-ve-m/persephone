import { Schema } from "mongoose";

const UserTimeExperienceUsDataSchema = new Schema({
    time_experience: String,
    unique_id: String,
});

export default UserTimeExperienceUsDataSchema;