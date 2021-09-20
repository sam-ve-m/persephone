import { IAetherOrder, IAetherInvalidOrder } from "@domain/aether";

export interface IAetherRepository {
  saveOrders(orders: IAetherOrder[]): Promise<any>;
  saveInvalidOrders(invalidOrders: IAetherInvalidOrder[]): Promise<any>;
}
