import {
  IProspectUser,
  ISuitability,
  ITerm,
  IDtvmUser,
  IDtvmUpdateUser,
} from "@domain/thebes_sphinx";

export interface IThebasSphinxRepository {
  saveProspectUsers(prospectUsers: IProspectUser[]): Promise<any>;
  saveTerms(terms: ITerm[]): Promise<any>;
  saveSuitabilities(suitabilities: ISuitability[]): Promise<any>;
  saveDtvmUsers(dtvmUsers: IDtvmUser[]): Promise<any>;
  saveDtvmUpdateUsers(dtvmUsers: IDtvmUpdateUser[]): Promise<any>;
}
