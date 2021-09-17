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
  ISaveUserThebesHall,
  ISaveUserAuthentication,
  ISaveUserLogout,
  IProspectUser,
  ISuitability,
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

  saveUserThebesHall(saveUsersThebesHall: ISaveUserThebesHall[]): Promise<any>;

  saveUserAuthentications(
    saveUserAuthentications: ISaveUserAuthentication[]
  ): Promise<any>;

  saveUserLogouts(saveUserLogouts: ISaveUserLogout[]): Promise<any>;
}
