import { Schema } from "mongoose";

const DtvmUserSchema = new Schema(
  {
    metadata: {
      user_email: String,
    },
    user_registry_data: {
      provided_by_user: {
        name: String,
        marital: {
          status: String,
          spouse: {
            spouse_name: String,
            nationality: String,
            cpf: Number,
          },
        },
        cpf: Number,
        email: String,
        // suitability: {
        //   score: Number,
        //   profile: String,
        //   version: Number,
        //   done_time_stamp: Number,
        // },
        can_be_managed_by_third_party_operator: Boolean,
        is_managed_by_third_party_operator: Boolean,
        third_party_operator: {
          isThird_party_operator: Boolean,
          details: {},
          third_party_operator_email: String,
        },
        is_cvm_qualified_investor: Boolean,
        us_person: {
          is_us_person: Boolean,
          us_tin: String,
        },
      },
      provided_by_bureaux: {
        gender: { value: String, source: String },
        birthDate: { value: Number, source: String },
        naturalness: { value: String, source: String },
        nationality: { value: String, source: String },
        mother_name: { value: String, source: String },
        identifier_document: {
          type: { value: String, source: String },
          document_data: {
            number: { value: String, source: String },
            date: { value: Number, source: String },
            state: { value: String, source: String },
            issuer: { value: String, source: String },
          },
        },
        address: {
          street_name: { value: String, source: String },
          number: { value: Number, source: String },
          state: { value: String, source: String },
          city: { value: String, source: String },
          zipCode: { value: String, source: String },
          phone_number: { value: String, source: String },
        },
        occupation: {
          status: { value: String, source: String },
          company: {
            name: { value: String, source: String },
            cpnj: { value: Number, source: String },
          },
        },
        assets: {
          patrimony: { value: Number, source: String },
          income: { value: Number, source: String },
        },
        education: {
          level: { value: String, source: String },
          course: { value: String, source: String },
        },
        documents_photos: {
          identifier_document: { value: String, source: String },
          address_document: { value: String, source: String },
        },
        politically_exposed_person: {
          is_politically_exposed_person: { value: Boolean, source: String },
        },
        date_of_acquisition: { value: Number, source: String },
      },
    },
    create_user_time_stamp: Number,
    create_digital_signature_time_stamp: Number,
  },
  { typeKey: "$type" }
);

export default DtvmUserSchema;
