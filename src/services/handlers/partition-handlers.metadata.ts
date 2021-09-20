import { IAetherService } from "@root/src/core/services/iaether-service";
import { IGaiaService } from "@core/services";
import { IHermesService } from "@root/src/core/services/ihermes-service";
import { IHyperionService } from "@root/src/core/services/ihyperion-service";
import { ISphinxService } from "@root/src/core/services/isphinx-service";
import { KafkaMessage } from "kafkajs";

const aetherScope = {
  "aether_persephone.orders": {
    "orders.queue": (
      aetherService: IAetherService,
      messageBatch: KafkaMessage[]
    ) => {
      aetherService.handleOrdersQueue(messageBatch);
    },
  },
  "aether_persephone.invalid_orders": {
    "invalid_orders.queue": (
      aetherService: IAetherService,
      messageBatch: KafkaMessage[]
    ) => {
      aetherService.handleInvalidOrdersQueue(messageBatch);
    },
  },
};

const gaiaScope = {
  "gaia_persephone.orders": {
    "orders.queue": (
      gaiaService: IGaiaService,
      messageBatch: KafkaMessage[]
    ) => {
      gaiaService.handleOrdersQueue(messageBatch);
    },
  },
  "gaia_persephone.responses": {
    "responses.queue": (
      gaiaService: IGaiaService,
      messageBatch: KafkaMessage[]
    ) => {
      gaiaService.handleResponsesQueue(messageBatch);
    },
  },
  "gaia_persephone.session_messages": {
    "session_messages.queue": (
      gaiaService: IGaiaService,
      messageBatch: KafkaMessage[]
    ) => {
      gaiaService.handleSessionMessagesQueue(messageBatch);
    },
  },
};

const hermesScope = {
  "hermes_persephone.order_session.authenticity": {
    "order_session.authenticity.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleOrderSessionAuthenticityQueue(messageBatch);
    },
  },
  "hermes_persephone.order_session.integrity": {
    "order_session.integrity.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleOrderSessionIntegrityQueue(messageBatch);
    },
  },
  "hermes_persephone.trade_sessions.create": {
    "trade_sessions.create.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleTradeSessionCreateQueue(messageBatch);
    },
  },
  "hermes_persephone.received_orders": {
    "received_orders.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleReceivedOrdersQueue(messageBatch);
    },
  },
  "hermes_persephone.sent_orders": {
    "sent_orders.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleSentOrdersQueue(messageBatch);
    },
  },
  "hermes_persephone.report_orders": {
    "report_orders.queue": (
      hermesService: IHermesService,
      messageBatch: KafkaMessage[]
    ) => {
      hermesService.handleReportOrdersQueue(messageBatch);
    },
  },
};

const hyperionScope = {
  "hyperion_persephone.responses": {
    "responses.queue": (
      hyperionService: IHyperionService,
      messageBatch: KafkaMessage[]
    ) => {
      hyperionService.handleResponsesQueue(messageBatch);
    },
  },
};

const sphinxScope = {
  "sphinx_persephone.user.crud": {
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
    "user_get_quiz_from_stoneage.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserGetQuizFromStoneageQueue(messageBatch);
    },
    "user_send_quiz_from_stoneage.queue": (
      sphinxService: ISphinxService,
      messageBatch: KafkaMessage[]
    ) => {
      sphinxService.handleUserSendQuizFromStoneageQueue(messageBatch);
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
  },
  "sphinx_persephone.user.authentication": {
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

const topicsPartitionsEnum = {
  "aether_persephone.orders": { 0: "orders.queue" },
  "aether_persephone.invalid_orders": { 0: "invalid_orders.queue" },

  "gaia_persephone.orders": { 0: "orders.queue" },
  "gaia_persephone.responses": { 0: "responses.queue" },
  "gaia_persephone.session_messages": { 0: "session_messages.queue" },

  "hermes_persephone.order_session.authenticity": {
    0: "order_session.authenticity.queue",
  },
  "hermes_persephone.order_session.integrity": {
    0: "order_session.integrity.queue",
  },
  "hermes_persephone.trade_sessions.create": {
    0: "trade_sessions.create.queue",
  },
  "hermes_persephone.received_orders": { 0: "received_orders.queue" },
  "hermes_persephone.sent_orders": { 0: "sent_orders.queue" },
  "hermes_persephone.report_orders": { 0: "report_orders.queue" },

  "hyperion_persephone.responses": { 0: "responses.queue" },

  "sphinx_persephone.user.crud": {
    0: "prospect_user.queue",
    1: "signed_term.queue",
    2: "suitability.queue",
    3: "user_bureau_callback.queue",
    4: "user_identifier_data.queue",
    5: "user_selfie.queue",
    6: "user_complementary_data.queue",
    7: "user_get_quiz_from_stoneage.queue",
    8: "user_send_quiz_from_stoneage.queue",
    9: "user_set_electronic_signature.queue",
    10: "user_change_or_reset_electronic_signature.queue",
    11: "create_electronic_signature_session.queue",
    12: "user_update_register_data.queue",
  },

  "sphinx_persephone.user.authentication": {
    0: "user_thebes_hall.queue",
    1: "user_authentication.queue",
    2: "user_logout.queue",
  },
};

export {
  aetherScope,
  gaiaScope,
  hermesScope,
  hyperionScope,
  sphinxScope,
  topicsPartitionsEnum,
};
