import { IGaiaService } from "@core/services/igaia-service";
import { IGaiaRepository } from "@core/repository/igaia-repository";

export class GaiaService implements IGaiaService {
  _gaiaRepository: IGaiaRepository;

  constructor(gaiaRepository: IGaiaRepository) {
    this._gaiaRepository = gaiaRepository;
  }

}
