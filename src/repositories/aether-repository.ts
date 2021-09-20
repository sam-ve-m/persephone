import { IAetherOrder, AetherOrderModel } from "@domain/aether";
import { IAetherInvalidOrder, AetherInvalidOrderModel } from "@domain/aether";

import { IAetherRepository } from "@core/repository/iaether-repository";

export class AetherRepository implements IAetherRepository {
  saveOrders(orders: IAetherOrder[]): Promise<any> {
    return AetherOrderModel.insertMany(orders);
  }

  saveInvalidOrders(invalidOrders: IAetherInvalidOrder[]): Promise<any> {
    return AetherInvalidOrderModel.insertMany(invalidOrders);
  }
}
