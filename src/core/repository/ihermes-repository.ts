import {
  IHermesOrderSessionAuthenticity,
  IHermesOrderSessionIntegrity,
  IHermesTradeSessionCreate,
  IHermesReceivedOrder,
  IHermesSentOrder,
  IHermesReportOrder,
} from "@domain/hermes";

export interface IHermesRepository {
  saveOrderSessionAuthenticity(
    orderSessionAuthenticity: IHermesOrderSessionAuthenticity[]
  ): Promise<any>;

  saveOrderSessionIntegrity(
    orderSessionIntegrity: IHermesOrderSessionIntegrity[]
  ): Promise<any>;

  saveTradeSessionCreate(
    tradeSessionCreate: IHermesTradeSessionCreate[]
  ): Promise<any>;

  saveReceivedOrders(receivedOrder: IHermesReceivedOrder[]): Promise<any>;
  saveSentOrders(sentOrder: IHermesSentOrder[]): Promise<any>;
  saveReportOrders(reportOrder: IHermesReportOrder[]): Promise<any>;
}
