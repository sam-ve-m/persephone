import { Schema } from "mongoose";

const UserPoliticallyExposedUSSchema = new Schema({
    politically_exposed: Boolean, 
    unique_id: String
});

export default UserPoliticallyExposedUSSchema;