import { IGaiaOrder, IGaiaResponse, IGaiaSessionMessage } from "@domain/gaia";

export interface IGaiaRepository {
  saveOrders(orders: IGaiaOrder[]): Promise<any>;
  saveResponses(responses: IGaiaResponse[]): Promise<any>;
  saveSessionMessages(sessionMessages: IGaiaSessionMessage[]): Promise<any>;
}
