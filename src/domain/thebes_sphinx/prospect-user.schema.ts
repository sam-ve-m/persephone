import { Schema } from "mongoose";

const ProspectUserSchema = new Schema({
  name: {
    type: String,
  },
  user_email: {
    type: String,
  },
  create_user_timestamp: {
    type: Number,
  },
});

export default ProspectUserSchema;
