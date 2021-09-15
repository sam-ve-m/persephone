import { KafkaMessage } from "kafkajs";

import { IThebasSphinxService } from "@core/services";
import { IThebasSphinxRepository } from "@core/repository";

import {
  RepositoriesErrorsHandlers,
  RepositoriesSucessHandlers,
} from "@service/handlers";

export class ThebasSphinxService implements IThebasSphinxService {
  _thebasSphinxRepository: IThebasSphinxRepository;

  constructor(thebasSphinxRepository: IThebasSphinxRepository) {
    this._thebasSphinxRepository = thebasSphinxRepository;
  }

  handleProspectUserQueue(prospectUsersMessages: KafkaMessage[]): void {
    const prospectUsers = prospectUsersMessages.map((prospectUserMessage) => {
      const prospectUserMessageString = prospectUserMessage.value.toString();
      const prospectUser = JSON.parse(prospectUserMessageString);

      return prospectUser;
    });

    this._thebasSphinxRepository
      .saveProspectUsers(prospectUsers)
      .then((data) => {
        RepositoriesSucessHandlers.handleInsertProspectUsersSucess(data);
      })
      .catch((error) => {
        RepositoriesErrorsHandlers.handleInsertProspectUsersErrors(error);
      });
  }

  handleTermQueue(termsMessages: KafkaMessage[]): void {
    const terms = termsMessages.map((termMessage) => {
      const termString = termMessage.value.toString();
      const term = JSON.parse(termString);
      return term;
    });

    this._thebasSphinxRepository
      .saveTerms(terms)
      .then((data) => {
        RepositoriesSucessHandlers.handleInsertTermSucess(data);
      })
      .catch((error) => {
        RepositoriesErrorsHandlers.handleInsertTermErrors(error);
      });
  }

  handleSuitabilityQueue(suitabilitiesMessages: KafkaMessage[]): void {
    const suitabilities = suitabilitiesMessages.map((suitabilitieMessage) => {
      const suitabilityString = suitabilitieMessage.value.toString();
      const suitability = JSON.parse(suitabilityString);
      return suitability;
    });

    this._thebasSphinxRepository
      .saveSuitabilities(suitabilities)
      .then((data) => {
        RepositoriesSucessHandlers.handleSuitabilitySucess(data);
      })
      .catch((error) => {
        RepositoriesErrorsHandlers.handleSuitabilityErrors(error);
      });
  }

  handleDtvmUserQueue(dtvmUsersMessages: KafkaMessage[]): void {
    const dtvmUsers = dtvmUsersMessages.map((dtvmUserMessage) => {
      const dtvmUserString = dtvmUserMessage.value.toString();
      const dtvmUser = JSON.parse(dtvmUserString);
      return dtvmUser;
    });

    this._thebasSphinxRepository
      .saveDtvmUsers(dtvmUsers)
      .then((data) => {
        RepositoriesSucessHandlers.handleDtvmUserSucess(data);
      })
      .catch((error) => {
        RepositoriesErrorsHandlers.handleDtvmUserErrors(error);
      });
  }

  handleDtvmUpdateUserQueue(dtvmUpdateUsersMessages: KafkaMessage[]): void {
    const dtvmUpdateUsers = dtvmUpdateUsersMessages.map(
      (dtvmUpdateUserMessage) => {
        const dtvmUpdateUserString = dtvmUpdateUserMessage.value.toString();
        const dtvmUpdateUser = JSON.parse(dtvmUpdateUserString);
        return dtvmUpdateUser;
      }
    );

    this._thebasSphinxRepository
      .saveDtvmUpdateUsers(dtvmUpdateUsers)
      .then((data) => {
        RepositoriesSucessHandlers.handleDtvmUpdateUserSucess(data);
      })
      .catch((error) => {
        RepositoriesErrorsHandlers.handleDtvmUpdateUserErrors(error);
      });
  }

  handleKycTableQueue(kycTableMessages: KafkaMessage[]): void {
    const kycTables = kycTableMessages.map((kycTableMessage) => {
      const kycTableString = kycTableMessage.value.toString();
      const kycTable = JSON.parse(kycTableString);
      return kycTable;
    });

    this._thebasSphinxRepository
      .saveKycTables(kycTables)
      .then((data) => {
        RepositoriesSucessHandlers.handleKycTableSucess(data);
      })
      .catch((error) => {
        RepositoriesErrorsHandlers.handleKycTableErrors(error);
      });
  }
}
