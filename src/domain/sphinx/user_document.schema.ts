import { Schema } from "mongoose";

const UserDocumentSchema = new Schema({
    path_document_front: String,
    path_document_back: String,
    unique_id: String
});

export default UserDocumentSchema;