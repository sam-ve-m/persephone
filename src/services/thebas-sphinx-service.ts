import { IThebasSphinxService } from "@core/services";
import { KafkaMessage } from "kafkajs";

export class ThebasSphinxService implements IThebasSphinxService {
  handleProspectUsersQueue(messageBatch: KafkaMessage[]): void {
    console.log(messageBatch.length);
  }
}
