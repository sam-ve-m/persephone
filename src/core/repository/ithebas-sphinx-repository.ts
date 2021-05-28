import { IProspectUser } from "@domain/thebes_sphinx";

export interface IThebasSphinxRepository {
  saveProspectUsers(prospectUsers: IProspectUser[]): void;
}
