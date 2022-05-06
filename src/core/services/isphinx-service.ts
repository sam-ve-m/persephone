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
  handleUserDocumentQueue(
    userDocument: KafkaMessage[]
  ): void;
  handleUserPoliticallyExposedUSQueue(
    userPoliticallyExposedUS: KafkaMessage[]
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
    UserExchangeMemberUsData: KafkaMessage[]
  ): void;
  handleUserTimeExperienceUsSchemaQueue(
    UserTimeExperienceUsData: KafkaMessage[]
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
