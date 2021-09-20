import { IHyperionResponse } from "@domain/hyperion";

export interface IHyperionRepository {
  saveResponses(response: IHyperionResponse[]): Promise<any>;
}
