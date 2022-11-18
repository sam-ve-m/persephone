import { Schema } from "mongoose";

const UserExchangeMemberUsSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    exchange_member: Boolean,
    created_at: Number
});

export default UserExchangeMemberUsSchema;