import { Schema } from "mongoose";

const UserExchangeMemberUsSchemaData = new Schema({
    exchange_member: Boolean,
    unique_id: String
});

export default UserExchangeMemberUsSchemaData;