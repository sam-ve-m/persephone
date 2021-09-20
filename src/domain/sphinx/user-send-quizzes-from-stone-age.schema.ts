import { Schema } from "mongoose";

const UserSendQuizzesFromStoneAgeSchema = new Schema({
    user_email: String,
    quiz: Object,
    response: Object,
    created_at: Number
});

export default UserSendQuizzesFromStoneAgeSchema;