import { Schema } from "mongoose";

const SaveUserThebesHallSchema = new Schema({
    unique_id: String,
    jwt: String,
    jwt_payload_data: JSON,
    device_information: JSON,
    created_at: Number
});

export default SaveUserThebesHallSchema;