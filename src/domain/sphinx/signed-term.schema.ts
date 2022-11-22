import { Schema } from "mongoose";

const SignedTermSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    terms_type: Array,
    terms_update: Object,
    user_accept: Boolean,
    created_at: Number
});

export default SignedTermSchema;