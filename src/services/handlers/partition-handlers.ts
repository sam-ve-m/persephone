import { KafkaMessage } from "kafkajs";

import { IThebasSphinxService } from "@core/services/ithebas-sphinx-service";

export module PartitionHandlers {
  export const registerPartitionsHandleCallbacks = () => {
    const topicPartitionToService = {
      "thebes.sphinx_persephone.topic": {
        "prospect.user.queue": (
          thebasSphinxService: IThebasSphinxService,
          messageBatch: KafkaMessage[]
        ) => {
          thebasSphinxService.handleProspectUserQueue(messageBatch);
        },
        "term.queue": (
          thebasSphinxService: IThebasSphinxService,
          messageBatch: KafkaMessage[]
        ) => {
          thebasSphinxService.handleTermQueue(messageBatch);
        },
        "suitability.queue": (
          thebasSphinxService: IThebasSphinxService,
          messageBatch: KafkaMessage[]
        ) => {
          thebasSphinxService.handleSuitabilityQueue(messageBatch);
        },
        "dtvm.user.queue": (
          thebasSphinxService: IThebasSphinxService,
          messageBatch: KafkaMessage[]
        ) => {
          thebasSphinxService.handleDtvmUserQueue(messageBatch);
        },
        "dtvm.update.user.queue": (
          thebasSphinxService: IThebasSphinxService,
          messageBatch: KafkaMessage[]
        ) => {
          thebasSphinxService.handleDtvmUpdateUserQueue(messageBatch);
        },

        "kyc.table.queue": (
          thebasSphinxService: IThebasSphinxService,
          messageBatch: KafkaMessage[]
        ) => {
          thebasSphinxService.handleKycTableQueue(messageBatch);
        },
      },
    };

    return topicPartitionToService;
  };

  const topicsPartitionsEnum = {
    "thebes.sphinx_persephone.topic": {
      0: "prospect.user.queue",
      1: "term.queue",
      2: "suitability.queue",
      3: "dtvm.user.queue",
      4: "dtvm.update.user.queue",
      5: "kyc.table.queue",
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
