import { Schema } from "mongoose";

const HermesTradeSessionCreateSchema = new Schema({
    ip: String,
    device_id: String,
    device_info: Object,
    jwt: String,
    created: Boolean,
    jwt_token_session: String,
    message: String,
    signature_expire_time: Number,
    email: String,
    connection_unique_id: String,
    created_at: Number
});

export default HermesTradeSessionCreateSchema;