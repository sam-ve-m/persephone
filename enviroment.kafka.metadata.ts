const aetherScope = [
  {
    topic: "aether_persephone.orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "aether.orders.group",
  },
  {
    topic: "aether_persephone.invalid_orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "aether.invalid_orders.group",
  },
];

const gaiaScope = [
  {
    topic: "gaia_persephone.session_messages",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "gaia.session_messages.group",
  },
  {
    topic: "gaia_persephone.orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "gaia.orders.group",
  },
  {
    topic: "gaia_persephone.responses",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "gaia.responses.group",
  },
];

const hermesScope = [
  {
    topic: "hermes_persephone.order_session.authenticity",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.order_session.authenticity.group",
  },
  {
    topic: "hermes_persephone.order_session.integrity",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.order_session.integrity.group",
  },
  {
    topic: "hermes_persephone.trade_sessions.create",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.trade_sessions.create.group",
  },
  {
    topic: "hermes_persephone.received_orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.received_orders.group",
  },
  {
    topic: "hermes_persephone.sent_orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.sent_orders.group",
  },
  {
    topic: "hermes_persephone.report_orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.report_orders.group",
  },
];

const hyperionScope = [
  {
    topic: "hyperion_persephone.responses",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hyperion.responses.group",
  },
];

const sphinxScope = [
  {
    topic: "sphinx_persephone.user.crud",
    numPartitions: 12,
    partitionsConsumedConcurrently: 6,
    numberOfConsumers: 12,
    consumerGroup: "sphinx.user.crud.group",
  },
  {
    topic: "sphinx_persephone.user.authentication",
    numPartitions: 3,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 3,
    consumerGroup: "sphinx.user.authentication.group",
  },
];

export { aetherScope, gaiaScope, hermesScope, hyperionScope, sphinxScope };
