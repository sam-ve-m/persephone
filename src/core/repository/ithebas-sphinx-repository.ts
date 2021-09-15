import {
  IProspectUser,
  ISuitability,
  ITerm,
  IDtvmUser,
  IDtvmUpdateUser,
  IKycTable,
} from "@domain/thebes_sphinx";

export interface IThebasSphinxRepository {
  saveProspectUsers(prospectUsers: IProspectUser[]): Promise<any>;
  saveTerms(terms: ITerm[]): Promise<any>;
  saveSuitabilities(suitabilities: ISuitability[]): Promise<any>;
  saveDtvmUsers(dtvmUsers: IDtvmUser[]): Promise<any>;
  saveDtvmUpdateUsers(dtvmUsers: IDtvmUpdateUser[]): Promise<any>;
  saveKycTables(kycTables: IKycTable[]): Promise<any>;
}




