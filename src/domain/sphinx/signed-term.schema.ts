import { Schema } from "mongoose";

const SignedTermSchema = new Schema({
    unique_id: String,
    term_type: String,
    term_version: String,
    user_accept: Boolean,
    created_at: Number
});

export default SignedTermSchema;