import { Schema } from "mongoose";

const DtvmUpdateUserSchema = new Schema(
  {
    metadata: {
      user_email: String,
      digital_signature_time_stamp: Number,
    },
    updated_user_data: {
      name: {
        previous_data: String,
        new_data: String,
      },
      marital: {
        status: {
          previous_data: String,
          new_data: String,
        },
        spouse: {
          spouse_name: {
            previous_data: String,
            new_data: String,
          },
          nationality: {
            previous_data: String,
            new_data: String,
          },
          cpf: {
            previous_data: Number,
            new_data: Number,
          },
        },
      },
      suitability: {
        score: {
          previous_data: Number,
          new_data: Number,
        },
        profile: {
          previous_data: String,
          new_data: String,
        },
        version: {
          previous_data: Number,
          new_data: Number,
        },
        done_time_stamp: {
          previous_data: Number,
          new_data: Number,
        },
      },
      is_cvm_qualified_investor: {
        previous_data: Boolean,
        new_data: Boolean,
      },
      gender: {
        previous_data: String,
        new_data: String,
      },
      identifier_document: {
        type: {
          previous_data: String,
          new_data: String,
        },
        document_data: {
          number: {
            previous_data: String,
            new_data: String,
          },
          date: {
            previous_data: Number,
            new_data: Number,
          },
          state: {
            previous_data: String,
            new_data: String,
          },
          issuer: {
            previous_data: String,
            new_data: String,
          },
        },
      },
      address: {
        street_name: {
          previous_data: String,
          new_data: String,
        },
        number: {
          previous_data: Number,
          new_data: Number,
        },
        state: {
          previous_data: String,
          new_data: String,
        },
        city: {
          previous_data: String,
          new_data: String,
        },
        zipCode: {
          previous_data: String,
          new_data: String,
        },
        phone_number: {
          previous_data: String,
          new_data: String,
        },
      },
      occupation: {
        status: {
          previous_data: String,
          new_data: String,
        },
        company: {
          name: {
            previous_data: String,
            new_data: String,
          },
          cpnj: {
            previous_data: Number,
            new_data: Number,
          },
        },
      },
      assets: {
        patrimony: {
          previous_data: Number,
          new_data: Number,
        },
        income: {
          previous_data: Number,
          new_data: Number,
        },
      },
      education: {
        level: {
          previous_data: String,
          new_data: String,
        },
        course: {
          previous_data: String,
          new_data: String,
        },
      },
      documents_photos: {
        identifier_document: {
          previous_data: String,
          new_data: String,
        },
        address_document: {
          previous_data: String,
          new_data: String,
        },
      },
      politically_exposed_person: {
        is_politically_exposed_person: {
          previous_data: Boolean,
          new_data: Boolean,
        },
      },
    },
    validate_user_time_stamp: Number,
  },
  { typeKey: "$type" }
);

export default DtvmUpdateUserSchema;
