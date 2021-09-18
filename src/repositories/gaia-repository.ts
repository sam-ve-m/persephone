import { IGaiaOrder, GaiaOrderModel } from "@domain/gaia";
import { IGaiaResponse, GaiaResponseModel } from "@domain/gaia";
import { IGaiaSessionMessage, GaiaSessionMessageModel } from "@domain/gaia";

import { IGaiaRepository } from "@core/repository/igaia-repository";

export class GaiaRepository implements IGaiaRepository {
  saveOrders(orders: IGaiaOrder[]): Promise<any> {
    return GaiaOrderModel.insertMany(orders);
  }

  saveResponses(responses: IGaiaResponse[]): Promise<any> {
    return GaiaResponseModel.insertMany(responses);
  }

  saveSessionMessages(sessionMessages: IGaiaSessionMessage[]): Promise<any> {
    return GaiaSessionMessageModel.insertMany(sessionMessages);
  }
}
