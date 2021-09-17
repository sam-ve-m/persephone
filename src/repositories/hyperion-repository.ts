import { IHyperionRepository } from "@core/repository/ihyperion-repository";
import { IHyperionResponse } from "@domain/hyperion";

export class HyperionRepository implements IHyperionRepository {
  saveResponses(response: IHyperionResponse[]): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
