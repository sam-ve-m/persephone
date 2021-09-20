import { Schema } from "mongoose";

const UserUpdateRegisterDataSchema = new Schema({
  user_email: String,
  modified_register_data: Object,
  update_customer_registration_data: Object,
  created_at: Number,
});

export default UserUpdateRegisterDataSchema;
