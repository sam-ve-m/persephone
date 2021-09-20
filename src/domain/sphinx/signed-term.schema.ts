import { Schema } from "mongoose";

const SignedTermSchema = new Schema({
    user_email: String,
    term_type: String,
    term_version: String,
    user_accept: Boolean,
    term_answer_time_stamp: Number,
    created_at: Number
});

export default SignedTermSchema;