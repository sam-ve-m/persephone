import { Schema } from "mongoose";

const ExecutionReportSchema = new Schema({
    json: {
        msgType: String,
        avgPx:  Number,
        cumQty:  Number,
        execID: String,
        execType: String,
        leavesQty: Number,
        orderID: String,
        orderQty: Number,
        ordStatus: String,
        ordType: String,
        side: String,
        symbol: String,
        clOrdID: String,
        lastPx:  Number,
        lastQty: Number,
        origCIOrdID: String,
        transactTime: String,
    },
    fix: String,
});

export default ExecutionReportSchema;