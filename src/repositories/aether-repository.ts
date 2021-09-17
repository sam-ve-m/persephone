import { IAetherOrder, IAetherInvalidOrder } from "@domain/aether";
import { IAetherRepository } from "@core/repository/iaether-repository";

export class AetherRepository implements IAetherRepository {
  saveOrders(orders: IAetherOrder[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveInvalidOrders(invalidOrders: IAetherInvalidOrder[]): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
