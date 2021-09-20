import { Schema } from "mongoose";

const UserIdentifierDataSchema = new Schema({
    user_email: String,
    cpf: String,
    cel_phone: String,
    created_at: Number,
});

export default UserIdentifierDataSchema;