import { Schema } from "mongoose";

const UserTimeExperienceUsSchemaData = new Schema({
    time_experience: String,
    unique_id: String,
});

export default UserTimeExperienceUsSchemaData;