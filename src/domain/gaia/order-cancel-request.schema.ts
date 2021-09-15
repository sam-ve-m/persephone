import { Schema } from "mongoose";

const OrderCancelRequestSchema = new Schema({
    json: {
        msg_type: String,
        cl_order_id: String,
        quantity: Number,
        origin_cl_order_id: String,
        side: String,
        symbol: String,
    },
    fix: String,
});

export default OrderCancelRequestSchema;