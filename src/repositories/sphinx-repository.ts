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
  IUserDocument,
  UserDocumentModel,
} from "@domain/sphinx";
import {
  IUserPoliticallyExposedUS,
  UserPoliticallyExposedUSModel,
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
import {
  IExchangeAccountData,
  ExchangeAccountDataModel,
} from "@domain/sphinx";

import { ISaveUserThebesHall, SaveUserThebesHallModel } from "@domain/sphinx";

import {
  ISaveUserAuthentication,
  SaveUserAuthenticationModel,
} from "@domain/sphinx";

import { ISaveUserLogout, SaveUserLogoutModel } from "@domain/sphinx";
import { ISuitability, SuitabilityModel } from "@domain/sphinx";

import { 
  IUserExchangeMemberUsData,
  UserExchangeMemberUsDataModel,
} from "@domain/sphinx";
import { 
  IUserTimeExperienceUsData,
  UserTimeExperienceUsDataModel,
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


import {
    IExchangeAccountStatus,
    ExchangeAccountStatusModel,
} from "@domain/sphinx";
import {
    ICpfValidationStatus,
    CpfValidationStatusModel,
} from "@domain/sphinx";
import {
    ICpfValidation,
    CpfValidationModel,
} from "@domain/sphinx";
import {
    IScoreValidationStatus,
    ScoreValidationStatusModel,
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

  saveUserDocument(
    userDocument: IUserDocument[]
  ): Promise<any> {
    return UserDocumentModel.insertMany(
      userDocument
    );
  }

  saveUserPoliticallyExposedUS(
    userPoliticallyExposedUS: IUserPoliticallyExposedUS[]
  ): Promise<any> {
    return UserPoliticallyExposedUSModel.insertMany(
      userPoliticallyExposedUS
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

  saveExchangeAccountStatus(saveExchangeAccountStatus: IExchangeAccountStatus[]): Promise<any> {
    return ExchangeAccountStatusModel.insertMany(saveExchangeAccountStatus);
  }
  saveCpfValidationStatus(saveCpfValidationStatus: ICpfValidationStatus[]): Promise<any> {
    return CpfValidationStatusModel.insertMany(saveCpfValidationStatus);
  }
  saveCpfValidation(saveCpfValidation: ICpfValidation[]): Promise<any> {
    return CpfValidationModel.insertMany(saveCpfValidation);
  }
  saveScoreValidationStatus(saveScoreValidationStatus: IScoreValidationStatus[]): Promise<any> {
    return ScoreValidationStatusModel.insertMany(saveScoreValidationStatus);
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

  saveUserExchangeMemberUsData(UserExchangeMemberUsData: IUserExchangeMemberUsData[]): Promise<any> {
    return UserExchangeMemberUsDataModel.insertMany(UserExchangeMemberUsData);
  }
  saveUserTimeExperienceUsData(UserTimeExperienceUsData: IUserTimeExperienceUsData[]): Promise<any> {
    return UserTimeExperienceUsDataModel.insertMany(UserTimeExperienceUsData);
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
  saveExchangeAccountData(setExchangeAccountData: IExchangeAccountData[]): Promise<any> {
    return ExchangeAccountDataModel.insertMany(setExchangeAccountData);
  }
}
