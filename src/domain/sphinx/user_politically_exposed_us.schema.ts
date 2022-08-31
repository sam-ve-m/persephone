import { Schema } from "mongoose";

const UserPoliticallyExposedUSSchema = new Schema({
    politically_exposed: Boolean,
    created_at: Number,
    unique_id: String
});

export default UserPoliticallyExposedUSSchema;