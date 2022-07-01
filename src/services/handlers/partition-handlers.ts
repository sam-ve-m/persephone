import { aetherScope, gaiaScope } from "./partition-handlers.metadata";
import { hermesScope, hyperionScope } from "./partition-handlers.metadata";
import { sphinxScope, ebisuScope } from "./partition-handlers.metadata";
import { topicsPartitionsEnum } from "./partition-handlers.metadata";

export module PartitionHandlers {
  export const registerPartitionsHandleCallbacks = () => ({
    ...aetherScope,
    ...gaiaScope,
    ...hermesScope,
    ...hyperionScope,
    ...sphinxScope,
    ...ebisuScope,
  });

  const getPartitionTopicName = function (
    topic: string,
    partition: number
  ): string {
    const nameOfTopicPartitions = topicsPartitionsEnum[topic];
    const partitionName = nameOfTopicPartitions[partition];

    return partitionName;
  };

  export const getPartitionHandleCallback = (
    topic: string,
    partition: number,
    partitionHandleCallbacks: Object
  ) => {
    const partitionName = getPartitionTopicName(topic, partition);
    const topicParitionsHandleCallbacks = partitionHandleCallbacks[topic];
    const partitionHandleCallback =
      topicParitionsHandleCallbacks[partitionName];

    return partitionHandleCallback;
  };
}
