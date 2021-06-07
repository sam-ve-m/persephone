import { KafkaMessage } from "kafkajs";

import { IThebasSphinxService } from "@core/services";
import { IThebasSphinxRepository } from "@core/repository";

export class ThebasSphinxService implements IThebasSphinxService {
  _thebasSphinxRepository: IThebasSphinxRepository;

  constructor(thebasSphinxRepository: IThebasSphinxRepository) {
    this._thebasSphinxRepository = thebasSphinxRepository;
  }

  handleProspectUserQueue(prospectUsersMessages: KafkaMessage[]): void {
    const prospectUsers = prospectUsersMessages.map((prospectUserMessage) => {
      const prospectUser = JSON.parse(prospectUserMessage.value.toString());
      return prospectUser;
    });

    // console.log("prospectUsers: ", prospectUsers.length);

    this._thebasSphinxRepository.saveProspectUsers(prospectUsers);
  }

  handleTermQueue(termsMessages: KafkaMessage[]): void {
    const terms = termsMessages.map((termMessage) => {
      const term = JSON.parse(termMessage.value.toString());
      return term;
    });

    // console.log("terms: ", terms.length);

    this._thebasSphinxRepository.saveTerms(terms);
  }

  handleSuitabilityQueue(suitabilitiesMessages: KafkaMessage[]): void {
    const suitabilities = suitabilitiesMessages.map((suitabilitieMessage) => {
      const suitability = JSON.parse(suitabilitieMessage.value.toString());
      return suitability;
    });

    // console.log("suitabilities: ", suitabilities.length);

    this._thebasSphinxRepository.saveSuitabilities(suitabilities);
  }

  handleDtvmUserQueue(dtvmUsersMessages: KafkaMessage[]): void {
    const dtvmUsers = dtvmUsersMessages.map((dtvmUserMessage) => {
      const dtvmUser = JSON.parse(dtvmUserMessage.value.toString());
      return dtvmUser;
    });

    // console.log("dtvmUsers: ", dtvmUsers.length);

    this._thebasSphinxRepository.saveDtvmUsers(dtvmUsers);
  }

  handleDtvmUpdateUserQueue(dtvmUpdateUsersMessages: KafkaMessage[]): void {
    const dtvmUpdateUsers = dtvmUpdateUsersMessages.map(
      (dtvmUpdateUserMessage) => {
        const dtvmUpdateUser = JSON.parse(
          dtvmUpdateUserMessage.value.toString()
        );
        return dtvmUpdateUser;
      }
    );

    // console.log("dtvmUsers: ", dtvmUsers.length);

    this._thebasSphinxRepository.saveDtvmUpdateUsers(dtvmUpdateUsers);
  }
}
