import { KafkaMessage } from "kafkajs";

import { IThebasSphinxService } from "@core/services/ithebas-sphinx-service";

export module PartitionHandlers {
  export const registerPartitionsHandleCallbacks = () => {
    const topicPartitionToService = {
      "thebes.sphinx.topic": {
        "prospect.users.queue": (
          thebasSphinxService: IThebasSphinxService,
          messageBatch: KafkaMessage[]
        ) => {
          thebasSphinxService.handleProspectUsersQueue(messageBatch);
        },
      },
    };

    return topicPartitionToService;
  };

  const topicsPartitionsEnum = {
    "thebes.sphinx.topic": {
      0: "prospect.users.queue",
    },
  };

  const getPartitionTopicName = function (
    topic: string,
    partition: Number
  ): string {
    const nameOfTopicPartitions = topicsPartitionsEnum[topic];
    const partitionName = nameOfTopicPartitions[partition];

    return partitionName;
  };

  export const getPartitionHandleCallback = (
    topic: string,
    partition: Number,
    partitionHandleCallbacks: Object
  ) => {
    const partitionName = getPartitionTopicName(topic, partition);
    const topicParitionsHandleCallbacks = partitionHandleCallbacks[topic];
    const partitionHandleCallback =
      topicParitionsHandleCallbacks[partitionName];

    return partitionHandleCallback;
  };
}
