import { Document, Model } from "mongoose";

export interface IUserDocument {
    path_document_front: String;
    path_document_back: String;
    unique_id: String;
}

export interface IUserDocumentDocument extends IUserDocument, Document {}
export interface IUserDocumentModel extends Model<IUserDocumentDocument> {}