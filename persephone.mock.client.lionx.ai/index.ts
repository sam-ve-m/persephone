const { Kafka } = require("kafkajs");
const { Partitioners } = require("kafkajs");

const configureKafkaProducerConnection = function () {
  const kafka = new Kafka({
    clientId: "auth-microservice",
    brokers: ["127.0.0.1:9092"],
  });

  return kafka;
};

const main = async () => {
  const kafka = configureKafkaProducerConnection();
  const producer = kafka.producer({
    createPartitioner: Partitioners.JavaCompatiblePartitioner,
  });
  await producer.connect();

  const gaiaMessages0 = new Array(1000).fill({
    value: "GAIA.0!",
    partition: 0,
  });
  const gaiaMessages1 = new Array(1000).fill({
    value: "GAIA.1!",
    partition: 1,
  });
  const gaiaMessages2 = new Array(1000).fill({
    value: "GAIA.2!",
    partition: 2,
  });
  const gaiaMessages3 = new Array(1000).fill({
    value: "GAIA.3!",
    partition: 3,
  });

  const gaiaMessages = [
    ...gaiaMessages0,
    ...gaiaMessages1,
    ...gaiaMessages2,
    ...gaiaMessages3,
  ];

  const shuffled = gaiaMessages.sort(() => Math.random() - 0.5);

  let i = 0;

  while (i < 30000) {
    producer.send({
      topic: "gaia.topic",
      messages: [
        { value: "GAIA.0!", partition: 0 },
        { value: "GAIA.1!", partition: 1 },
        { value: "GAIA.2!", partition: 2 },
        { value: "GAIA.3!", partition: 3 },
      ],
    });
    console.log("Iteration", i);
    i++;
  }

  console.log("Finalizou");
};

main();
