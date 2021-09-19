import { Schema } from "mongoose";

const SaveUserLogoutSchema = new Schema({
    user_email: String,
    jwt: String,
    created_at: Number
});

export default SaveUserLogoutSchema;