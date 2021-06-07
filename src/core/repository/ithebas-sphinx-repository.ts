import {
  IProspectUser,
  ISuitability,
  ITerm,
  IDtvmUser,
  IDtvmUpdateUser,
} from "@domain/thebes_sphinx";

export interface IThebasSphinxRepository {
  saveProspectUsers(prospectUsers: IProspectUser[]): void;
  saveTerms(terms: ITerm[]): void;
  saveSuitabilities(suitabilities: ISuitability[]): void;
  saveDtvmUsers(dtvmUsers: IDtvmUser[]): void;
  saveDtvmUpdateUsers(dtvmUsers: IDtvmUpdateUser[]): void;
}
