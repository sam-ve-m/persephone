import { Schema } from "mongoose";

const OrderCancelRejectSchema = new Schema({
    json: {
        msgType: String,
        clOrdID: String,
        orderID: String,
        ordStatus: String,
        origCIOrdID: String,
        cxlRejReason: Number,
        cxlRejResponseTo: String,
        text: String,
    },
    fix: String,
});

export default OrderCancelRejectSchema;