import { Document, Model } from "mongoose";

export interface IDtvmUser {
  metadata: {
    user_email: String;
  };
  user_registry_data: {
    provided_by_user: {
      name: String;
      marital: {
        status: String;
        spouse: {
          spouse_name: String;
          nationality: String;
          cpf: Number;
        };
      };
      cpf: Number;
      email: String;
      suitability: {
        score: Number;
        profile: String;
        version: Number;
        done_time_stamp: Number;
      };
      can_be_managed_by_third_party_operator: Boolean;
      is_managed_by_third_party_operator: Boolean;
      third_party_operator: {
        isThird_party_operator: Boolean;
        details: {};
        third_party_operator_email: String;
      };
      is_cvm_qualified_investor: Boolean;
      us_person: {
        is_us_person: Boolean;
        us_tin: String;
      };
    };
    provided_by_bureaux: {
      gender: String;
      birthDate: Number;
      naturalness: String;
      nationality: String;
      mother_name: String;
      identifier_document: {
        type: String;
        document_data: {
          number: String;
          date: Number;
          state: String;
          issuer: String;
        };
      };
      address: {
        street_name: String;
        number: Number;
        state: String;
        city: String;
        zipCode: String;
        phone_number: String;
      };
      occupation: {
        status: String;
        company: {
          name: String;
          cpnj: Number;
        };
      };
      assets: {
        patrimony: Number;
        income: Number;
      };
      education: {
        level: String;
        course: String;
      };
      documents_photos: {
        identifier_document: String;
        address_document: String;
      };
      politically_exposed_person: {
        is_politically_exposed_person: Boolean;
      };
      date_of_acquisition: Number;
    };
  };
  create_user_time_stamp: Number;
  create_digital_signature_time_stamp: String;
}

export interface IDtvmUserDocument extends IDtvmUser, Document {}
export interface IDtvmUserModel extends Model<IDtvmUserDocument> {}
