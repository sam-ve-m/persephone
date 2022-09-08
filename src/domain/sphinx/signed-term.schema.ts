import { Schema } from "mongoose";

const SignedTermSchema = new Schema({
    unique_id: String,
    terms_type: Array,
    terms_update: Object,
    user_accept: Boolean,
    created_at: Number
});

export default SignedTermSchema;