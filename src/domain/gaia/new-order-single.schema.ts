import { Schema } from "mongoose";

const NewOrderSingleSchema = new Schema({
    json: {
        msg_type: String,
        account: String,
        cl_order_id: String,
        handl_inst: String,
        quantity: Number,
        ord_type: String,
        side: String,
        symbol: String,
        expire_date: String,
        price: Number,
        stop_px: Number,
        time_in_force: String,
        min_qty: Number,
        max_floor: Number,
    },
    fix: String,
});

export default NewOrderSingleSchema;