import { IDtvmUser, DtvmUserModel } from "@domain/thebes_sphinx";
import { IDtvmUpdateUser, DtvmUpdateUserModel } from "@domain/thebes_sphinx";
import { IProspectUser, ProspectUserModel } from "@domain/thebes_sphinx";
import { ISuitability, SuitabilityModel } from "@domain/thebes_sphinx";
import { ITerm, TermModel } from "@domain/thebes_sphinx";

import { IThebasSphinxRepository } from "@core/repository";

export class ThebasSphinxRepository implements IThebasSphinxRepository {
  saveProspectUsers(prospectUsers: IProspectUser[]): void {
    ProspectUserModel.insertMany(prospectUsers)
      .then((data) => {
        // console.log("Done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  saveTerms(terms: ITerm[]): void {
    TermModel.insertMany(terms)
      .then((data) => {
        // console.log("Done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  saveSuitabilities(suitabilities: ISuitability[]): void {
    SuitabilityModel.insertMany(suitabilities)
      .then((data) => {
        // console.log("Done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  saveDtvmUsers(dtvmUsers: IDtvmUser[]): void {
    DtvmUserModel.insertMany(dtvmUsers)
      .then((data) => {
        // console.log("Done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  saveDtvmUpdateUsers(dtvmUpdateUsers: IDtvmUpdateUser[]): void {
    DtvmUpdateUserModel.insertMany(dtvmUpdateUsers)
      .then((data) => {
        // console.log("Done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
}
