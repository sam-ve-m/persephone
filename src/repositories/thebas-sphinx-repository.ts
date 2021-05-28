import { IThebasSphinxRepository } from "@core/repository";
import { IProspectUser, ProspectUserModel } from "@domain/thebes_sphinx";

export class ThebasSphinxRepository implements IThebasSphinxRepository {
  saveProspectUsers(prospectUsers: IProspectUser[]): void {
    ProspectUserModel.insertMany(prospectUsers).then((data) => {});
  }
}
