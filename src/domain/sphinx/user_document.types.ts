import { Document, Model } from "mongoose";

export interface IUserDocument {
    unique_id: String;
    device_id: String;
    device_info: Object;
    path_document_front: String;
    path_document_back: String;
    created_at: Number;
}

export interface IUserDocumentDocument extends IUserDocument, Document {}
export interface IUserDocumentModel extends Model<IUserDocumentDocument> {}