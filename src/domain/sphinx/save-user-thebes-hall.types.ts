import { Document, Model } from "mongoose";

export interface ISaveUserThebesHall {
    unique_id: String;
    device_id: String;
    device_info: Object;
    jwt: String;
    jwt_payload_data: Object;
    device_information: Object,
    created_at: Number;
}

export interface ISaveUserThebesHallDocument extends ISaveUserThebesHall, Document {}
export interface ISaveUserThebesHallModel extends Model<ISaveUserThebesHallDocument> {}