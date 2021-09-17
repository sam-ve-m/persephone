import { Document, Model } from "mongoose";

export interface ISaveUserThebesHall { }

export interface ISaveUserThebesHallDocument extends ISaveUserThebesHall, Document {}
export interface ISaveUserThebesHallModel extends Model<ISaveUserThebesHallDocument> {}