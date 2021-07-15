
import { Document, Model } from "mongoose";

interface INewOrderSingleJson {
    msg_type: string;
    account: string;
    cl_order_id: string;
    handl_inst: string;
    quantity: number;
    ord_type: string;
    side: string;
    symbol: string;
    expire_date: string;
    price: number;
    stop_px: number;
    time_in_force: string;
    min_qty: number;
    max_floor: number;
}

export interface INewOrderSingle {
    json: INewOrderSingleJson;
    fix: string;

}

export interface INewOrderSingleDocument extends INewOrderSingle, Document {}
export interface INewOrderSingleModel extends Model<INewOrderSingleDocument> {}

