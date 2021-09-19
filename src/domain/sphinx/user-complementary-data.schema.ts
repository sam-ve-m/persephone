import { Schema } from "mongoose";

const UserComplementaryDataSchema = new Schema({
    user_email: String,
    is_us_person: Boolean,
    us_tin: String,
    is_cvm_qualified_investor: Boolean,
    marital: Object,
    created_at: Number
});

export default UserComplementaryDataSchema;