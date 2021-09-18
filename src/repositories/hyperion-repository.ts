import { IHyperionRepository } from "@core/repository/ihyperion-repository";
import { IHyperionResponse, HyperionResponseModel } from "@domain/hyperion";

export class HyperionRepository implements IHyperionRepository {
  saveResponses(response: IHyperionResponse[]): Promise<any> {
    return HyperionResponseModel.insertMany(response);
  }
}
