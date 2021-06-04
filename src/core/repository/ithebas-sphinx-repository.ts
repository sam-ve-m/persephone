import { IProspectUser, ISuitability, ITerm } from "@domain/thebes_sphinx";

export interface IThebasSphinxRepository {
  saveProspectUsers(prospectUsers: IProspectUser[]): void;
  saveTerms(terms: ITerm[]): void;
  saveSuitabilities(suitabilities: ISuitability[]): void;
  // saveDtvmUsers(dtvmUsers: IDtvmUser[]): void;
}
