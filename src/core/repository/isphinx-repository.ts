import {
  ISignedTerm,
  IBureauCallback,
  IUserIdentifierData,
  IUserSelfie,
  IUserComplementaryData,
  IUserDocument,
  IUserPoliticallyExposedUS,
  IUserElectronicSignature,
  IUserChangeOrResetElectronicSignature,
  ICreateElectronicSignatureSession,
  IUserUpdateRegisterData,
  ISaveUserThebesHall,
  ISaveUserAuthentication,
  ISaveUserLogout,
  IProspectUser,
  ISuitability,
  IUserExchangeMemberUsData,
  IUserTimeExperienceUsData,
  IGetUserCompanyDirectorSchemaTemplateWithDataData,
  IGetUserTaxResidencesSchemaTemplateWithDataData,
  IGetW8FormConfirmationSchemaTemplateWithDataData,
  IGetUserEmployForSchemaTemplateWithDataData,
  IExchangeAccountData,
  IExchangeAccountStatus,
  ICpfValidationStatus,
  ICpfValidation,
  IScoreValidationStatus,
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

  saveUserDocument(
    userDocument: IUserDocument[]
  ): Promise<any>;
  saveUserPoliticallyExposedUS(
    userPoliticallyExposedUS: IUserPoliticallyExposedUS[]
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

  saveUserExchangeMemberUsData(
    UserExchangeMemberUsData: IUserExchangeMemberUsData[]
  ): Promise<any>;
  saveUserTimeExperienceUsData(
    UserTimeExperienceUsData: IUserTimeExperienceUsData[]
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
  saveExchangeAccountData(
    getUserEmployForSchemaTemplateWithDataData: IExchangeAccountData[]
  ): Promise<any>;
  saveExchangeAccountStatus(
  ExchangeAccountStatus: IExchangeAccountStatus[]
  ): Promise<any>;
  saveCpfValidationStatus(
  CpfValidationStatus: ICpfValidationStatus[]
  ): Promise<any>;
  saveCpfValidation(
  CpfValidation: ICpfValidation[]
  ): Promise<any>;
  saveScoreValidationStatus(
  ScoreValidationStatus: IScoreValidationStatus[]
  ): Promise<any>;

  saveUserThebesHall(saveUsersThebesHall: ISaveUserThebesHall[]): Promise<any>;

  saveUserAuthentications(
    saveUserAuthentications: ISaveUserAuthentication[]
  ): Promise<any>;

  saveUserLogouts(saveUserLogouts: ISaveUserLogout[]): Promise<any>;
}
