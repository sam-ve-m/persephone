import { Schema } from "mongoose";

const PicpayUserDataSchema = new Schema({
    unique_id: String,
    device_id: String,
    device_info: Object,
    fields: Object,
    created_at: Number
});

export default PicpayUserDataSchema;