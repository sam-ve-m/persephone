import { Schema } from "mongoose";

const UserDocumentSchema = new Schema({
    unique_id: String,
    path_document_front: String,
    path_document_back: String,
    created_at: Number,
});

export default UserDocumentSchema;