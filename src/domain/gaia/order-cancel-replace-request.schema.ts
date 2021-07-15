import { Schema } from "mongoose";

const OrderCancelReplaceRequestSchema = new Schema({
    json: {
        msg_type: String,
        account: String,
        cl_order_id: String,
        handl_inst: String,
        ord_type: String,
        origin_cl_order_id: String,
        side: String,
        symbol: String,
        price: Number,
        stop_px: Number,
        time_in_force: String,
    },
    fix: String,
});

export default OrderCancelReplaceRequestSchema;