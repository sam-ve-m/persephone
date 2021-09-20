import { Schema } from "mongoose";

const UserGetQuizzesFromStoneAgeSchema = new Schema({
    user_email: String,
    output: Object,
    created_at: Number
});

export default UserGetQuizzesFromStoneAgeSchema;