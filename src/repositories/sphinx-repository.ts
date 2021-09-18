import { IProspectUser, ProspectUserModel } from "@domain/sphinx";
import { ISignedTerm, SignedTermModel } from "@domain/sphinx";
import { IBureauCallback, BureauCallbackModel } from "@domain/sphinx";
import { IUserIdentifierData, UserIdentifierDataModel } from "@domain/sphinx";
import { IUserSelfie, UserSelfieModel } from "@domain/sphinx";

import {
  IUserComplementaryData,
  UserComplementaryDataModel,
} from "@domain/sphinx";
import {
  IUserGetQuizzesFromStoneAge,
  UserGetQuizzesFromStoneAgeModel,
} from "@domain/sphinx";
import {
  IUserSendQuizzesFromStoneAge,
  UserSendQuizzesFromStoneAgeModel,
} from "@domain/sphinx";
import {
  IUserElectronicSignature,
  UserElectronicSignatureModel,
} from "@domain/sphinx";
import {
  IUserChangeOrResetElectronicSignature,
  UserChangeOrResetElectronicSignatureModel,
} from "@domain/sphinx";
import {
  ICreateElectronicSignatureSession,
  CreateElectronicSignatureSessionModel,
} from "@domain/sphinx";

import { ISaveUserThebesHall, SaveUserThebesHallModel } from "@domain/sphinx";

import {
  ISaveUserAuthentication,
  SaveUserAuthenticationModel,
} from "@domain/sphinx";

import { ISaveUserLogout, SaveUserLogoutModel } from "@domain/sphinx";
import { ISuitability, SuitabilityModel } from "@domain/sphinx";

import { ISphinxRepository } from "@core/repository";

export class SphinxRepository implements ISphinxRepository {
  saveSignedTerms(signedTerms: ISignedTerm[]): Promise<any> {
    return SignedTermModel.insertMany(signedTerms);
  }

  saveUserBureauCallbacks(bureauCallbacks: IBureauCallback[]): Promise<any> {
    return BureauCallbackModel.insertMany(bureauCallbacks);
  }

  saveUserIdentifierData(
    userIdentifierData: IUserIdentifierData[]
  ): Promise<any> {
    return UserIdentifierDataModel.insertMany(userIdentifierData);
  }

  saveUserSelfies(userSelfies: IUserSelfie[]): Promise<any> {
    return UserSelfieModel.insertMany(userSelfies);
  }

  saveUserComplementaryData(
    usersComplementaryData: IUserComplementaryData[]
  ): Promise<any> {
    return UserComplementaryDataModel.insertMany(usersComplementaryData);
  }

  saveUserGetQuizFromStoneage(
    userGetQuizzesFromStoneAge: IUserGetQuizzesFromStoneAge[]
  ): Promise<any> {
    return UserGetQuizzesFromStoneAgeModel.insertMany(
      userGetQuizzesFromStoneAge
    );
  }

  saveUserSendQuizFromStoneage(
    userSendQuizzesFromStoneAge: IUserSendQuizzesFromStoneAge[]
  ): Promise<any> {
    return UserSendQuizzesFromStoneAgeModel.insertMany(
      userSendQuizzesFromStoneAge
    );
  }

  saveUserSetElectronicSignatures(
    usersElectronicSignatures: IUserElectronicSignature[]
  ): Promise<any> {
    return UserElectronicSignatureModel.insertMany(usersElectronicSignatures);
  }

  saveUserChangeOrResetElectronicSignatures(
    usersChangeOrResetElectronicSignatures: IUserChangeOrResetElectronicSignature[]
  ): Promise<any> {
    return UserChangeOrResetElectronicSignatureModel.insertMany(
      usersChangeOrResetElectronicSignatures
    );
  }

  saveCreateElectronicSignatureSessions(
    createElectronicSignatureSessions: ICreateElectronicSignatureSession[]
  ): Promise<any> {
    return CreateElectronicSignatureSessionModel.insertMany(
      createElectronicSignatureSessions
    );
  }

  saveUserThebesHall(saveUsersThebesHall: ISaveUserThebesHall[]): Promise<any> {
    return SaveUserThebesHallModel.insertMany(saveUsersThebesHall);
  }

  saveUserAuthentications(
    saveUserAuthentications: ISaveUserAuthentication[]
  ): Promise<any> {
    return SaveUserAuthenticationModel.insertMany(saveUserAuthentications);
  }

  saveUserLogouts(saveUserLogouts: ISaveUserLogout[]): Promise<any> {
    return SaveUserLogoutModel.insertMany(saveUserLogouts);
  }

  saveSuitability(suitabilities: ISuitability[]): Promise<any> {
    return SuitabilityModel.insertMany(suitabilities);
  }

  saveProspectUser(prospectUsers: IProspectUser[]): Promise<any> {
    return ProspectUserModel.insertMany(prospectUsers);
  }
}
