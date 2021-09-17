import { IHermesRepository } from "@core/repository/ihermes-repository";
import { IHermesOrderSessionAuthenticity } from "@domain/hermes";
import { IHermesOrderSessionIntegrity } from "@domain/hermes";
import { IHermesReceivedOrder, IHermesSentOrder } from "@domain/hermes";
import { IHermesTradeSessionCreate, IHermesReportOrder } from "@domain/hermes";

export class HermesRepository implements IHermesRepository {
  saveOrderSessionAuthenticity(
    orderSessionAuthenticity: IHermesOrderSessionAuthenticity[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveOrderSessionIntegrity(
    orderSessionIntegrity: IHermesOrderSessionIntegrity[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveTradeSessionCreate(
    tradeSessionCreate: IHermesTradeSessionCreate[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveReceivedOrders(receivedOrder: IHermesReceivedOrder[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveSentOrders(sentOrder: IHermesSentOrder[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveReportOrders(reportOrder: IHermesReportOrder[]): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
