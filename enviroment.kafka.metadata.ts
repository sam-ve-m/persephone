const aetherScope = [
  {
    topic: "aether-persephone.orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "aether.orders.group",
  },
  {
    topic: "aether-persephone.invalid-orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "aether.invalid-orders.group",
  },
];

const gaiaScope = [
  {
    topic: "gaia-persephone.session-messages",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "gaia.session-messages.group",
  },
  {
    topic: "gaia-persephone.orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "gaia.orders.group",
  },
  {
    topic: "gaia-persephone.responses",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "gaia.responses.group",
  },
];

const hermesScope = [
  {
    topic: "hermes-persephone.order-session.authenticity",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.order-session.authenticity.group",
  },
  {
    topic: "hermes-persephone.order-session.integrity",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.order-session.integrity.group",
  },
  {
    topic: "hermes-persephone.trade-sessions.create",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.trade-sessions.create.group",
  },
  {
    topic: "hermes-persephone.received-orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.received-orders.group",
  },
  {
    topic: "hermes-persephone.sent-orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.sent-orders.group",
  },
  {
    topic: "hermes-persephone.report-orders",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hermes.report-orders.group",
  },
];

const hyperionScope = [
  {
    topic: "hyperion-persephone.responses",
    numPartitions: 1,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 1,
    consumerGroup: "hyperion.responses.group",
  },
];

const sphinxScope = [
  {
    topic: "sphinx-persephone.user.crud",
    numPartitions: 27,
    partitionsConsumedConcurrently: 6,
    numberOfConsumers: 27
    consumerGroup: "sphinx.user.crud.group",
  },
  {
    topic: "sphinx-persephone.user.authentication",
    numPartitions: 3,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 3,
    consumerGroup: "sphinx.user.authentication.group",
  },
];

const ebisuScope = [
  {
    topic: "ebisu-persephone.client.bank_account",
    numPartitions: 3,
    partitionsConsumedConcurrently: 1,
    numberOfConsumers: 3,
    consumerGroup: "ebisu.client.bank_account.group",
  },
];


export { aetherScope, gaiaScope, hermesScope, hyperionScope, sphinxScope, ebisuScope };
