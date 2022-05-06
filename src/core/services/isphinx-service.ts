import { KafkaMessage } from "kafkajs";

export interface ISphinxService {
  handleProspectUserQueue(prospectUserMessages: KafkaMessage[]): void;
  handleSignedTermQueue(signedTermsMessages: KafkaMessage[]): void;
  handleSuitabilityQueue(suitabilitiesMessages: KafkaMessage[]): void;
  handleUserBureauCallbackQueue(bureauCallbacks: KafkaMessage[]): void;
  handleUserIdentifierDataQueue(userIdentifierData: KafkaMessage[]): void;
  handleUserSelfieQueue(userSelfies: KafkaMessage[]): void;

  handleUserComplementaryDataQueue(
    usersComplementaryData: KafkaMessage[]
  ): void;
  handleUserGetQuizFromStoneageQueue(
    userGetQuizzesFromStoneAge: KafkaMessage[]
  ): void;
  handleUserSendQuizFromStoneageQueue(
    userSendQuizzesFromStoneAge: KafkaMessage[]
  ): void;
  handleUserSetElectronicSignatureQueue(
    usersElectronicSignatures: KafkaMessage[]
  ): void;
  handleUserChangeOrResetElectronicSignatureQueue(
    usersChangeOrResetElectronicSignatures: KafkaMessage[]
  ): void;
  handleCreateElectronicSignatureSessionQueue(
    createElectronicSignatureSessions: KafkaMessage[]
  ): void;
  handleUserUpdateRegisterDataQueue(
    userUpdatesRegisterData: KafkaMessage[]
  ): void;


  handleUserExchangeMemberUsSchemaQueue(
    userExchangeMemberUsSchemaData: KafkaMessage[]
  ): void;
  handleUserTimeExperienceUsSchemaQueue(
    userTimeExperienceUsSchemaData: KafkaMessage[]
  ): void;
  handleGetUserCompanyDirectorSchemaTemplateWithDataQueue(
    getUserCompanyDirectorSchemaTemplateWithDataData: KafkaMessage[]
  ): void;
  handleGetUserTaxResidencesSchemaTemplateWithDataQueue(
    getUserTaxResidencesSchemaTemplateWithDataData: KafkaMessage[]
  ): void;
  handleGetW8FormConfirmationSchemaTemplateWithDataQueue(
    getW8FormConfirmationSchemaTemplateWithDataData: KafkaMessage[]
  ): void;
  handleGetUserEmployForSchemaTemplateWithDataQueue(
    getUserEmployForSchemaTemplateWithDataData: KafkaMessage[]
  ): void;

  handleUserThebesHallQueue(saveUsersThebesHall: KafkaMessage[]): void;
  handleUserAuthenticationQueue(saveUserAuthentications: KafkaMessage[]): void;
  handleUserLogoutQueue(saveUserLogouts: KafkaMessage[]): void;
}
