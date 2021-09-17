const { Kafka } = require("kafkajs");
const { Partitioners } = require("kafkajs");

const configureKafkaProducerConnection = function () {
  const kafka = new Kafka({
    clientId: "persephone.lionx.com.br",
    brokers: ["10.42.0.35:9092"],
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

  const prospectUser = JSON.stringify({
    user_email: "iggormagro8@gmail.com",
    name: "Igor Luciano Magro",
    create_user_timestamp: 56416545,
  });

  while (i < 30000) {
    // producer.send({
    //   topic: "gaia",
    //   messages: [
    //     { value: "GAIA.0!", partition: 0 },
    //     { value: "GAIA.1!", partition: 1 },
    //     { value: "GAIA.2!", partition: 2 },
    //     { value: "GAIA.3!", partition: 3 },
    //   ],
    // });

    producer.send({
      topic: "thebes.sphinx_persephone",
      messages: [
        { value: prospectUser, partition: 0 },
        { value: prospectUser, partition: 0 },
        { value: prospectUser, partition: 0 },
        { value: prospectUser, partition: 0 },
      ],
    });
    console.log("Iteration", i);
    i++;
  }

  console.log("Finalizou");
};

main();
