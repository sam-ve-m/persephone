import { Schema } from "mongoose";

const ProspectUserSchema = new Schema({
    user_email: String,
    nick_name: String,
    create_user_time_stamp: Number,
    created_at: Number
});

export default ProspectUserSchema;