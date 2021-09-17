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
} from "@domain/sphinx";

import { ISphinxRepository } from "@core/repository";

export class SphinxRepository implements ISphinxRepository {
  saveSignedTerms(signedTerms: ISignedTerm[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserBureauCallbacks(bureauCallbacks: IBureauCallback[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserIdentifierData(
    userIdentifierData: IUserIdentifierData[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserSelfies(userSelfies: IUserSelfie[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserComplementaryData(
    usersComplementaryData: IUserComplementaryData[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserGetQuizFromStoneage(
    userGetQuizzesFromStoneAge: IUserGetQuizzesFromStoneAge[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserSendQuizFromStoneage(
    userSendQuizzesFromStoneAge: IUserSendQuizzesFromStoneAge[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserSetElectronicSignatures(
    usersElectronicSignatures: IUserElectronicSignature[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserChangeOrResetElectronicSignatures(
    usersChangeOrResetElectronicSignatures: IUserChangeOrResetElectronicSignature[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveCreateElectronicSignatureSessions(
    createElectronicSignatureSessions: ICreateElectronicSignatureSession[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserThebesHall(saveUsersThebesHall: ISaveUserThebesHall[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserAuthentications(
    saveUserAuthentications: ISaveUserAuthentication[]
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  saveUserLogouts(saveUserLogouts: ISaveUserLogout[]): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
