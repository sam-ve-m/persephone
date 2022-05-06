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
import {
  IUserUpdateRegisterData,
  UserUpdateRegisterDataModel,
} from "@domain/sphinx";

import { ISaveUserThebesHall, SaveUserThebesHallModel } from "@domain/sphinx";

import {
  ISaveUserAuthentication,
  SaveUserAuthenticationModel,
} from "@domain/sphinx";

import { ISaveUserLogout, SaveUserLogoutModel } from "@domain/sphinx";
import { ISuitability, SuitabilityModel } from "@domain/sphinx";

import { 
  IUserExchangeMemberUsSchemaData,
  UserExchangeMemberUsSchemaDataModel,
} from "@domain/sphinx";
import { 
  IUserTimeExperienceUsSchemaData,
  UserTimeExperienceUsSchemaDataModel,
} from "@domain/sphinx";
import { 
  IGetUserCompanyDirectorSchemaTemplateWithDataData,
  GetUserCompanyDirectorSchemaTemplateWithDataDataModel,
} from "@domain/sphinx";
import { 
  IGetUserTaxResidencesSchemaTemplateWithDataData,
  GetUserTaxResidencesSchemaTemplateWithDataDataModel,
} from "@domain/sphinx";
import { 
  IGetW8FormConfirmationSchemaTemplateWithDataData,
  GetW8FormConfirmationSchemaTemplateWithDataDataModel,
} from "@domain/sphinx";
import { 
  IGetUserEmployForSchemaTemplateWithDataData,
  GetUserEmployForSchemaTemplateWithDataDataModel,
} from "@domain/sphinx";

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

  saveUserUpdatesRegisterData(
    userUpdatesRegisterData: IUserUpdateRegisterData[]
  ): Promise<any> {
    return UserUpdateRegisterDataModel.insertMany(userUpdatesRegisterData);
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

  saveUserExchangeMemberUsSchemaData(userExchangeMemberUsSchemaData: IUserExchangeMemberUsSchemaData[]): Promise<any> {
    return UserExchangeMemberUsSchemaDataModel.insertMany(userExchangeMemberUsSchemaData);
  }
  saveUserTimeExperienceUsSchemaData(userTimeExperienceUsSchemaData: IUserTimeExperienceUsSchemaData[]): Promise<any> {
    return UserTimeExperienceUsSchemaDataModel.insertMany(userTimeExperienceUsSchemaData);
  }
  saveGetUserCompanyDirectorSchemaTemplateWithDataData(getUserCompanyDirectorSchemaTemplateWithDataData: IGetUserCompanyDirectorSchemaTemplateWithDataData[]): Promise<any> {
    return GetUserCompanyDirectorSchemaTemplateWithDataDataModel.insertMany(getUserCompanyDirectorSchemaTemplateWithDataData);
  }
  saveGetUserTaxResidencesSchemaTemplateWithDataData(getUserTaxResidencesSchemaTemplateWithDataData: IGetUserTaxResidencesSchemaTemplateWithDataData[]): Promise<any> {
    return GetUserTaxResidencesSchemaTemplateWithDataDataModel.insertMany(getUserTaxResidencesSchemaTemplateWithDataData);
  }
  saveGetW8FormConfirmationSchemaTemplateWithDataData(getW8FormConfirmationSchemaTemplateWithDataData: IGetW8FormConfirmationSchemaTemplateWithDataData[]): Promise<any> {
    return GetW8FormConfirmationSchemaTemplateWithDataDataModel.insertMany(getW8FormConfirmationSchemaTemplateWithDataData);
  }
  saveGetUserEmployForSchemaTemplateWithDataData(getUserEmployForSchemaTemplateWithDataData: IGetUserEmployForSchemaTemplateWithDataData[]): Promise<any> {
    return GetUserEmployForSchemaTemplateWithDataDataModel.insertMany(getUserEmployForSchemaTemplateWithDataData);
  }

}
