import { Document, Model } from "mongoose";

export interface IDtvmUser {
  metadata: {
    user_email: string;
  };
  user_registry_data: {
    provided_by_user: {
      name: string;
      marital: {
        status: string;
        spouse: {
          spouse_name: string;
          nationality: string;
          cpf: number;
        };
      };
      cpf: number;
      email: string;
      // suitability: {
      //   score: number;
      //   profile: string;
      //   version: number;
      //   done_time_stamp: number;
      // };
      can_be_managed_by_third_party_operator: boolean;
      is_managed_by_third_party_operator: boolean;
      third_party_operator: {
        isThird_party_operator: boolean;
        details: {};
        third_party_operator_email: string;
      };
      is_cvm_qualified_investor: boolean;
      us_person: {
        is_us_person: boolean;
        us_tin: string;
      };
    };
    provided_by_bureaux: {
      gender: { value: string; source: string };
      birthDate: { value: number; source: string };
      naturalness: { value: string; source: string };
      nationality: { value: string; source: string };
      mother_name: { value: string; source: string };
      identifier_document: {
        type: { value: string; source: string };
        document_data: {
          number: { value: string; source: string };
          date: { value: number; source: string };
          state: { value: string; source: string };
          issuer: { value: string; source: string };
        };
      };
      address: {
        street_name: { value: string; source: string };
        number: { value: number; source: string };
        state: { value: string; source: string };
        city: { value: string; source: string };
        zipCode: { value: string; source: string };
        phone_number: { value: string; source: string };
      };
      occupation: {
        status: { value: string; source: string };
        company: {
          name: { value: string; source: string };
          cpnj: { value: number; source: string };
        };
      };
      assets: {
        patrimony: { value: number; source: string };
        income: { value: number; source: string };
      };
      education: {
        level: { value: string; source: string };
        course: { value: string; source: string };
      };
      documents_photos: {
        identifier_document: { value: string; source: string };
        address_document: { value: string; source: string };
      };
      politically_exposed_person: {
        is_politically_exposed_person: { value: boolean; source: string };
      };
      date_of_acquisition: { value: number; source: string };
    };
  };
  create_user_time_stamp: number;
  create_digital_signature_time_stamp: number;
}

export interface IDtvmUserDocument extends IDtvmUser, Document {}
export interface IDtvmUserModel extends Model<IDtvmUserDocument> {}
