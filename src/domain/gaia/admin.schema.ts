import { Schema } from "mongoose";

const AdminSchema = new Schema({
    fix: { type: String }
});

export default AdminSchema;