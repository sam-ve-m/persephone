import { IHermesRepository } from "@core/repository/ihermes-repository";

import {
  IHermesOrderSessionAuthenticity,
  HermesOrderSessionAuthenticityModel,
} from "@domain/hermes";

import {
  IHermesOrderSessionIntegrity,
  HermesOrderSessionIntegrityModel,
} from "@domain/hermes";

import { IHermesReceivedOrder, HermesReceivedOrderModel } from "@domain/hermes";
import { IHermesSentOrder, HermesSentOrderModel } from "@domain/hermes";
import {
  IHermesTradeSessionCreate,
  HermesTradeSessionCreateModel,
} from "@domain/hermes";
import { IHermesReportOrder, HermesReportOrderModel } from "@domain/hermes";

export class HermesRepository implements IHermesRepository {
  saveOrderSessionAuthenticity(
    orderSessionAuthenticity: IHermesOrderSessionAuthenticity[]
  ): Promise<any> {
    return HermesOrderSessionAuthenticityModel.insertMany(
      orderSessionAuthenticity
    );
  }

  saveOrderSessionIntegrity(
    orderSessionIntegrity: IHermesOrderSessionIntegrity[]
  ): Promise<any> {
    return HermesOrderSessionIntegrityModel.insertMany(orderSessionIntegrity);
  }

  saveTradeSessionCreate(
    tradeSessionCreate: IHermesTradeSessionCreate[]
  ): Promise<any> {
    return HermesTradeSessionCreateModel.insertMany(tradeSessionCreate);
  }

  saveReceivedOrders(receivedOrder: IHermesReceivedOrder[]): Promise<any> {
    return HermesReceivedOrderModel.insertMany(receivedOrder);
  }

  saveSentOrders(sentOrder: IHermesSentOrder[]): Promise<any> {
    return HermesSentOrderModel.insertMany(sentOrder);
  }

  saveReportOrders(reportOrder: IHermesReportOrder[]): Promise<any> {
    return HermesReportOrderModel.insertMany(reportOrder);
  }
}
