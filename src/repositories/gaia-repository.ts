import { IGaiaOrder, IGaiaResponse, IGaiaSessionMessage } from "@domain/gaia";
import { IGaiaRepository } from "@core/repository/igaia-repository";

export class GaiaRepository implements IGaiaRepository {
  saveOrders(orders: IGaiaOrder[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveResponses(responses: IGaiaResponse[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveSessionMessages(sessionMessages: IGaiaSessionMessage[]): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
