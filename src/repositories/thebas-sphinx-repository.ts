import { IDtvmUpdateUser, DtvmUpdateUserModel } from "@domain/thebes_sphinx";
import { IDtvmUser, DtvmUserModel } from "@domain/thebes_sphinx";
import { IProspectUser, ProspectUserModel } from "@domain/thebes_sphinx";
import { ISuitability, SuitabilityModel } from "@domain/thebes_sphinx";
import { ITerm, TermModel } from "@domain/thebes_sphinx";

import { IThebasSphinxRepository } from "@core/repository";

export class ThebasSphinxRepository implements IThebasSphinxRepository {
  saveProspectUsers(prospectUsers: IProspectUser[]): Promise<any> {
    return ProspectUserModel.insertMany(prospectUsers);
  }

  saveTerms(terms: ITerm[]): Promise<any> {
    return TermModel.insertMany(terms);
  }

  saveSuitabilities(suitabilities: ISuitability[]): Promise<any> {
    return SuitabilityModel.insertMany(suitabilities);
  }

  saveDtvmUsers(dtvmUsers: IDtvmUser[]): Promise<any> {
    return DtvmUserModel.insertMany(dtvmUsers);
  }

  saveDtvmUpdateUsers(dtvmUpdateUsers: IDtvmUpdateUser[]): Promise<any> {
    return DtvmUpdateUserModel.insertMany(dtvmUpdateUsers);
  }
}
