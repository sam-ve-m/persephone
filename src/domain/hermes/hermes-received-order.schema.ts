import { Schema } from "mongoose";

const HermesReceivedOrderSchema = new Schema({
    ip: String,
    device_id: String,
    device_info: Object,
    jwt: String,
    jwt_token_session: String,
    request: Object,
    is_session_valid: Boolean,
    message: String,
    cl_order_id: String,
    connection_unique_id: String,
    created_at: Number,
});

export default HermesReceivedOrderSchema;