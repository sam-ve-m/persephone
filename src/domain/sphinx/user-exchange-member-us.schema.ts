import { Schema } from "mongoose";

const UserExchangeMemberUsSchema = new Schema({
    unique_id: String,
    exchange_member: Boolean,
    created_at: Number
});

export default UserExchangeMemberUsSchema;