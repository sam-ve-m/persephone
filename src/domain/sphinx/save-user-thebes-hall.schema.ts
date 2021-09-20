import { Schema } from "mongoose";

const SaveUserThebesHallSchema = new Schema({
    user_email: String,
    jwt: JSON,
    has_trade_allowed: JSON,
    device_information: JSON,
    created_at: Number
});

export default SaveUserThebesHallSchema;