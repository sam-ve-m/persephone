import { KafkaMessage } from "kafkajs";

import { ISphinxService } from "@core/services";
import { ISphinxRepository } from "@core/repository";
import { RepositoriesSucessHandlers } from "./handlers";

export class SphinxService implements ISphinxService {
  _sphinxRepository: ISphinxRepository;

  constructor(sphinxRepository: ISphinxRepository) {
    this._sphinxRepository = sphinxRepository;
  }

  handleProspectUserQueue(prospectUserMessages: KafkaMessage[]): void {
    const formattedData = prospectUserMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveProspectUser(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleSignedTermQueue(signedTermsMessages: KafkaMessage[]): void {
    const formattedData = signedTermsMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveSignedTerms(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleSuitabilityQueue(suitabilitiesMessages: KafkaMessage[]): void {
    const formattedData = suitabilitiesMessages.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveSuitability(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserBureauCallbackQueue(bureauCallbacks: KafkaMessage[]): void {
    const formattedData = bureauCallbacks.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserBureauCallbacks(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserIdentifierDataQueue(userIdentifierData: KafkaMessage[]): void {
    const formattedData = userIdentifierData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserIdentifierData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserSelfieQueue(userSelfies: KafkaMessage[]): void {
    const formattedData = userSelfies.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserSelfies(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserComplementaryDataQueue(
    usersComplementaryData: KafkaMessage[]
  ): void {
    const formattedData = usersComplementaryData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserComplementaryData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserDocumentQueue(
    userDocument: KafkaMessage[]
  ): void {
    const formattedData = userDocument.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserDocument(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserPoliticallyExposedUSQueue(
    userPoliticallyExposedUS: KafkaMessage[]
  ): void {
    const formattedData = userPoliticallyExposedUS.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserPoliticallyExposedUS(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserSetElectronicSignatureQueue(
    usersElectronicSignatures: KafkaMessage[]
  ): void {
    const formattedData = usersElectronicSignatures.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserSetElectronicSignatures(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserChangeOrResetElectronicSignatureQueue(
    usersChangeOrResetElectronicSignatures: KafkaMessage[]
  ): void {
    const formattedData = usersChangeOrResetElectronicSignatures.map(
      (message) => {
        const messageString = message.value.toString();
        return JSON.parse(messageString);
      }
    );

    this._sphinxRepository
      .saveUserChangeOrResetElectronicSignatures(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleCreateElectronicSignatureSessionQueue(
    createElectronicSignatureSessions: KafkaMessage[]
  ): void {
    const formattedData = createElectronicSignatureSessions.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveCreateElectronicSignatureSessions(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserUpdateRegisterDataQueue(
    userUpdatesRegisterData: KafkaMessage[]
  ): void {
    const formattedData = userUpdatesRegisterData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserUpdatesRegisterData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserExchangeMemberUsSchemaQueue(
    UserExchangeMemberUsData: KafkaMessage[]
    ): void {
      const formattedData = UserExchangeMemberUsData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserExchangeMemberUsData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleUserTimeExperienceUsSchemaQueue(
    UserTimeExperienceUsData: KafkaMessage[]
    ): void {
      const formattedData = UserTimeExperienceUsData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserTimeExperienceUsData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleGetUserCompanyDirectorSchemaTemplateWithDataQueue(
    getUserCompanyDirectorSchemaTemplateWithDataData: KafkaMessage[]
    ): void {
      const formattedData = getUserCompanyDirectorSchemaTemplateWithDataData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveGetUserCompanyDirectorSchemaTemplateWithDataData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleGetUserTaxResidencesSchemaTemplateWithDataQueue(
    getUserTaxResidencesSchemaTemplateWithDataData: KafkaMessage[]
    ): void {
      const formattedData = getUserTaxResidencesSchemaTemplateWithDataData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveGetUserTaxResidencesSchemaTemplateWithDataData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleGetW8FormConfirmationSchemaTemplateWithDataQueue(
    getW8FormConfirmationSchemaTemplateWithDataData: KafkaMessage[]
    ): void {
      const formattedData = getW8FormConfirmationSchemaTemplateWithDataData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveGetW8FormConfirmationSchemaTemplateWithDataData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleGetUserEmployForSchemaTemplateWithDataQueue(
    getUserEmployForSchemaTemplateWithDataData: KafkaMessage[]
    ): void {
      const formattedData = getUserEmployForSchemaTemplateWithDataData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveGetUserEmployForSchemaTemplateWithDataData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleSetExchangeAccountQueue(
    setExchangeAccountData: KafkaMessage[]
    ): void {
      const formattedData = setExchangeAccountData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveExchangeAccountData(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleExchangeAccountStatusQueue(
    userExchangeAccountStatus: KafkaMessage[]
    ): void {
      const formattedData = userExchangeAccountStatus.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveExchangeAccountStatus(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleCpfValidationStatusQueue(
    userCpfValidationStatus: KafkaMessage[]
    ): void {
      const formattedData = userCpfValidationStatus.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveCpfValidationStatus(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleCpfValidationQueue(
    userCpfValidation: KafkaMessage[]
    ): void {
      const formattedData = userCpfValidation.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveCpfValidation(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
    handleScoreValidationQueue(
    userScoreValidation: KafkaMessage[]
    ): void {
      const formattedData = userScoreValidation.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveScoreValidation(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handleScoreValidationStatusQueue(
    userScoreValidationStatus: KafkaMessage[]
    ): void {
      const formattedData = userScoreValidationStatus.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveScoreValidationStatus(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
  handlePicpayUserDataQueue(
      userPicpayUserData: KafkaMessage[]
  ): void {
    const formattedData = userPicpayUserData.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
        .savePicpayUserData(formattedData)
        .then((data) => {
          RepositoriesSucessHandlers.handleGeneralSucess(data);
        })
        .catch((data) => {
          RepositoriesSucessHandlers.handleGeneralError(data);
        });
  }
  handlePldQueue(
      userPld: KafkaMessage[]
  ): void {
    const formattedData = userPld.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
        .savePld(formattedData)
        .then((data) => {
          RepositoriesSucessHandlers.handleGeneralSucess(data);
        })
        .catch((data) => {
          RepositoriesSucessHandlers.handleGeneralError(data);
        });
  }

  handleUserThebesHallQueue(saveUsersThebesHall: KafkaMessage[]): void {
    const formattedData = saveUsersThebesHall.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserThebesHall(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserAuthenticationQueue(saveUserAuthentications: KafkaMessage[]): void {
    const formattedData = saveUserAuthentications.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserAuthentications(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }

  handleUserLogoutQueue(saveUserLogouts: KafkaMessage[]): void {
    const formattedData = saveUserLogouts.map((message) => {
      const messageString = message.value.toString();
      return JSON.parse(messageString);
    });

    this._sphinxRepository
      .saveUserLogouts(formattedData)
      .then((data) => {
        RepositoriesSucessHandlers.handleGeneralSucess(data);
      })
      .catch((data) => {
        RepositoriesSucessHandlers.handleGeneralError(data);
      });
  }
}
