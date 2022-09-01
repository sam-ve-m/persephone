import { Schema } from "mongoose";

const UserExchangeMemberUsSchema = new Schema({
    exchange_member: Boolean,
    unique_id: String,
    created_at: Number
});

export default UserExchangeMemberUsSchema;