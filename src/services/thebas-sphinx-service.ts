import { KafkaMessage } from "kafkajs";

import { IThebasSphinxService } from "@core/services";
import { IThebasSphinxRepository } from "@core/repository";

export class ThebasSphinxService implements IThebasSphinxService {
  _thebasSphinxRepository: IThebasSphinxRepository;

  constructor(thebasSphinxRepository: IThebasSphinxRepository) {
    this._thebasSphinxRepository = thebasSphinxRepository;
  }

  handleProspectUsersQueue(messageBatch: KafkaMessage[]): void {}
}
