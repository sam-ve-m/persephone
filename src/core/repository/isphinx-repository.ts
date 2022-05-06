import {
  ISignedTerm,
  IBureauCallback,
  IUserIdentifierData,
  IUserSelfie,
  IUserComplementaryData,
  IUserGetQuizzesFromStoneAge,
  IUserSendQuizzesFromStoneAge,
  IUserElectronicSignature,
  IUserChangeOrResetElectronicSignature,
  ICreateElectronicSignatureSession,
  IUserUpdateRegisterData,
  ISaveUserThebesHall,
  ISaveUserAuthentication,
  ISaveUserLogout,
  IProspectUser,
  ISuitability,
  IUserExchangeMemberUsSchemaData,
  IUserTimeExperienceUsSchemaData,
  IGetUserCompanyDirectorSchemaTemplateWithDataData,
  IGetUserTaxResidencesSchemaTemplateWithDataData,
  IGetW8FormConfirmationSchemaTemplateWithDataData,
  IGetUserEmployForSchemaTemplateWithDataData,
} from "@domain/sphinx";

export interface ISphinxRepository {
  saveSignedTerms(signedTerms: ISignedTerm[]): Promise<any>;
  saveUserBureauCallbacks(bureauCallbacks: IBureauCallback[]): Promise<any>;

  saveUserIdentifierData(
    userIdentifierData: IUserIdentifierData[]
  ): Promise<any>;

  saveUserSelfies(userSelfies: IUserSelfie[]): Promise<any>;

  saveUserComplementaryData(
    usersComplementaryData: IUserComplementaryData[]
  ): Promise<any>;

  saveProspectUser(prospectUsers: IProspectUser[]): Promise<any>;
  saveSuitability(suitabilities: ISuitability[]): Promise<any>;

  saveUserGetQuizFromStoneage(
    userGetQuizzesFromStoneAge: IUserGetQuizzesFromStoneAge[]
  ): Promise<any>;
  saveUserSendQuizFromStoneage(
    userSendQuizzesFromStoneAge: IUserSendQuizzesFromStoneAge[]
  ): Promise<any>;
  saveUserSetElectronicSignatures(
    usersElectronicSignatures: IUserElectronicSignature[]
  ): Promise<any>;
  saveUserChangeOrResetElectronicSignatures(
    usersChangeOrResetElectronicSignatures: IUserChangeOrResetElectronicSignature[]
  ): Promise<any>;
  saveCreateElectronicSignatureSessions(
    createElectronicSignatureSessions: ICreateElectronicSignatureSession[]
  ): Promise<any>;
  saveUserUpdatesRegisterData(
    userUpdatesRegisterData: IUserUpdateRegisterData[]
  ): Promise<any>;

  saveUserExchangeMemberUsSchemaData(
    userExchangeMemberUsSchemaData: IUserExchangeMemberUsSchemaData[]
  ): Promise<any>;
  saveUserTimeExperienceUsSchemaData(
    userTimeExperienceUsSchemaData: IUserTimeExperienceUsSchemaData[]
  ): Promise<any>;
  saveGetUserCompanyDirectorSchemaTemplateWithDataData(
    getUserCompanyDirectorSchemaTemplateWithDataData: IGetUserCompanyDirectorSchemaTemplateWithDataData[]
  ): Promise<any>;
  saveGetUserTaxResidencesSchemaTemplateWithDataData(
    getUserTaxResidencesSchemaTemplateWithDataData: IGetUserTaxResidencesSchemaTemplateWithDataData[]
  ): Promise<any>;
  saveGetW8FormConfirmationSchemaTemplateWithDataData(
    getW8FormConfirmationSchemaTemplateWithDataData: IGetW8FormConfirmationSchemaTemplateWithDataData[]
  ): Promise<any>;
  saveGetUserEmployForSchemaTemplateWithDataData(
    getUserEmployForSchemaTemplateWithDataData: IGetUserEmployForSchemaTemplateWithDataData[]
  ): Promise<any>;

  saveUserThebesHall(saveUsersThebesHall: ISaveUserThebesHall[]): Promise<any>;

  saveUserAuthentications(
    saveUserAuthentications: ISaveUserAuthentication[]
  ): Promise<any>;

  saveUserLogouts(saveUserLogouts: ISaveUserLogout[]): Promise<any>;
}
