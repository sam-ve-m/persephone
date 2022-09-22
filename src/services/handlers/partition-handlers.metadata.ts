import { IAetherService } from "@root/src/core/services/iaether-service";
import { IGaiaService } from "@core/services";
import { IHermesService } from "@root/src/core/services/ihermes-service";
import { IHyperionService } from "@root/src/core/services/ihyperion-service";
import { ISphinxService } from "@root/src/core/services/isphinx-service";
import { IEbisuService } from "@root/src/core/services/iebisu-service";
import { KafkaMessage } from "kafkajs";

const aetherScope = {
  "aether-persephone.orders": {
    "orders.queue": (
      aetherService: IAetherService,
      messageBatch: KafkaMessage[]
    ) => {
      aetherService.handleOrdersQueue(messageBatch);
    },
  },
  "aether-persephone.invalid-orders": {
    "invalid_orders.queue": (
      aetherService: IAetherService,
      messageBatch: KafkaMessage[]
    ) => {
      aetherService.handleInvalidOrdersQueue(messageBatch);
    },
  },
};

const gaiaScope = {
  "gaia-persephone.orders": {
    "orders.queue": (
      gaiaService: IGaiaService,
      messageBatch: KafkaMessage[]
    ) => {
      gaiaService.handleOrdersQueue(messageBatch);
    },
  },
  "gaia-persephone.responses": {
    "responses.queue": (
      gaiaService: IGaiaService,
      messageBatch: KafkaMessage[]
    ) => {
      gaiaService.handleResponsesQueue(messageBatch);
    },
  },
  "gaia-persephone.session-messages": {
    "session_messages.queue": (
      gaiaService: IGaiaService,
      messageBatch: KafkaMessage[]
    ) => {
      gaiaService.handleSessionMessagesQueue(messageBatch);
    },
  },
};

const hermesScope = {
  "hermes-persephone.order-session.authenticity": {
    "order_session.authenticity.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleOrderSessionAuthenticityQueue(messageBatch);
    },
  },
  "hermes-persephone.order-session.integrity": {
    "order_session.integrity.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleOrderSessionIntegrityQueue(messageBatch);
    },
  },
  "hermes-persephone.trade-sessions.create": {
    "trade_sessions.create.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleTradeSessionCreateQueue(messageBatch);
    },
  },
  "hermes-persephone.received-orders": {
    "received_orders.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleReceivedOrdersQueue(messageBatch);
    },
  },
  "hermes-persephone.sent-orders": {
    "sent_orders.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleSentOrdersQueue(messageBatch);
    },
  },
  "hermes-persephone.report-orders": {
    "report_orders.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleReportOrdersQueue(messageBatch);
    },
  },
};

const hyperionScope = {
  "hyperion-persephone.responses": {
    "responses.queue": (
      hyperionService: IHyperionService,
      messageBatch: KafkaMessage[]
    ) => {
      hyperionService.handleResponsesQueue(messageBatch);
    },
  },
};

const sphinxScope = {
  "sphinx-persephone.user.crud": {
    "prospect_user.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleProspectUserQueue(messageBatch);
    },
    "signed_term.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleSignedTermQueue(messageBatch);
    },
    "suitability.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleSuitabilityQueue(messageBatch);
    },
    "user_bureau_callback.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserBureauCallbackQueue(messageBatch);
    },
    "user_identifier_data.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserIdentifierDataQueue(messageBatch);
    },
    "user_selfie.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserSelfieQueue(messageBatch);
    },
    "user_complementary_data.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserComplementaryDataQueue(messageBatch);
    },
    "user_document.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserDocumentQueue(messageBatch);
    },
    "user_politically_exposed_us.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserPoliticallyExposedUSQueue(messageBatch);
    },
    "user_set_electronic_signature.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserSetElectronicSignatureQueue(messageBatch);
    },
    "user_change_or_reset_electronic_signature.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserChangeOrResetElectronicSignatureQueue(
        messageBatch
      );
    },
    "create_electronic_signature_session.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleCreateElectronicSignatureSessionQueue(messageBatch);
    },
    "user_update_register_data.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserUpdateRegisterDataQueue(messageBatch);
    },
    "user_exchange_member_us_schema.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserExchangeMemberUsSchemaQueue(messageBatch);
    },
    "user_time_experience_us_schema.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserTimeExperienceUsSchemaQueue(messageBatch);
    },
    "get_user_company_director_schema_template_with_data.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleGetUserCompanyDirectorSchemaTemplateWithDataQueue(messageBatch);
    },
    "get_user_tax_residences_schema_template_with_data.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleGetUserTaxResidencesSchemaTemplateWithDataQueue(messageBatch);
    },
    "get_w8_form_confirmation_schema_template_with_data.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleGetW8FormConfirmationSchemaTemplateWithDataQueue(messageBatch);
    },
    "get_user_employ_for_schema_template_with_data.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleGetUserEmployForSchemaTemplateWithDataQueue(messageBatch);
    },
    "exchange_account.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleSetExchangeAccountQueue(messageBatch);
    },
    "exchange_account_status.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleExchangeAccountStatusQueue(messageBatch);
    },
    "cpf_validation.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleCpfValidationQueue(messageBatch);
    },
    "cpf_validation_status.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleCpfValidationStatusQueue(messageBatch);
    },
    "score_validation_status.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleScoreValidationStatusQueue(messageBatch);
    },

  },
  "sphinx-persephone.user.authentication": {
    "user_thebes_hall.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserThebesHallQueue(messageBatch);
    },
    "user_authentication.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserAuthenticationQueue(messageBatch);
    },
    "user_logout.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserLogoutQueue(messageBatch);
    },
  },
};

const ebisuScope = {
  "ebisu-persephone.client.bank_account": {
    "register_client_bank_account.queue": (
      ebisuService: IEbisuService,
      messageBatch: KafkaMessage[]
    ) => {
      ebisuService.handleBankAccountRegisters(messageBatch);
    },
    "update_client_bank_account.queue": (
      ebisuService: IEbisuService,
      messageBatch: KafkaMessage[]
    ) => {
      ebisuService.handleBankAccountUpdates(messageBatch);
    },
    "delete_client_bank_account.queue": (
      ebisuService: IEbisuService,
      messageBatch: KafkaMessage[]
    ) => {
      ebisuService.handleBankAccountDeletions(messageBatch);
    },
  },
};

const topicsPartitionsEnum = {
  "aether-persephone.orders": { 0: "orders.queue" },
  "aether-persephone.invalid-orders": { 0: "invalid_orders.queue" },

  "gaia-persephone.orders": { 0: "orders.queue" },
  "gaia-persephone.responses": { 0: "responses.queue" },
  "gaia-persephone.session-messages": { 0: "session_messages.queue" },

  "hermes-persephone.order-session.authenticity": {
    0: "order_session.authenticity.queue",
  },
  "hermes-persephone.order-session.integrity": {
    0: "order_session.integrity.queue",
  },
  "hermes-persephone.trade-sessions.create": {
    0: "trade_sessions.create.queue",
  },
  "hermes-persephone.received-orders": { 0: "received_orders.queue" },
  "hermes-persephone.sent-orders": { 0: "sent_orders.queue" },
  "hermes-persephone.report-orders": { 0: "report_orders.queue" },

  "hyperion-persephone.responses": { 0: "responses.queue" },

  "sphinx-persephone.user.crud": {
    0: "prospect_user.queue",
    1: "signed_term.queue",
    2: "suitability.queue",
    3: "user_bureau_callback.queue",
    4: "user_identifier_data.queue",
    5: "user_selfie.queue",
    6: "user_complementary_data.queue",
    7: "user_document.queue",
    8: "user_politically_exposed_us.queue",
    9: "user_set_electronic_signature.queue",
    10: "user_change_or_reset_electronic_signature.queue",
    11: "create_electronic_signature_session.queue",
    12: "user_update_register_data.queue",
    13: "user_exchange_member_us_schema.queue",
    14: "user_time_experience_us_schema.queue",
    15: "get_user_company_director_schema_template_with_data.queue",
    16: "get_user_tax_residences_schema_template_with_data.queue",
    17: "get_w8_form_confirmation_schema_template_with_data.queue",
    18: "get_user_employ_for_schema_template_with_data.queue",
    19: "exchange_account.queue",
    20: "exchange_account_status.queue",
    21: "cpf_validation.queue",
    22: "cpf_validation_status.queue",
    23: "score_validation_status.queue",
  },

  "sphinx-persephone.user.authentication": {
    0: "user_thebes_hall.queue",
    1: "user_authentication.queue",
    2: "user_logout.queue",
  },

  "ebisu-persephone.client.bank_account": {
    0: "register_client_bank_account.queue",
    1: "update_client_bank_account.queue",
    2: "delete_client_bank_account.queue",
  },

};

export {
  aetherScope,
  gaiaScope,
  hermesScope,
  hyperionScope,
  sphinxScope,
  ebisuScope,
  topicsPartitionsEnum,
};
