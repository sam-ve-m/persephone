import { Schema } from "mongoose";

const TermSchema = new Schema({
  metadata: {
    user_email: String,
  },
  term_type: String,
  term_version: String,
  user_accept: Boolean,
  term_answer_time_stamp: Number,
});

export default TermSchema;
