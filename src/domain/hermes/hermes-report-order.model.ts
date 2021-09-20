import { model } from "mongoose";

import { IHermesReportOrder } from "@domain/hermes/hermes-report-order.types";
import HermesReportOrderSchema from "@domain/hermes/hermes-report-order.schema";

export const HermesReportOrderModel = model<IHermesReportOrder>(
    "hermes-report-order",
    HermesReportOrderSchema
);