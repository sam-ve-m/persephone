import { KafkaMessage } from "kafkajs";

import { IThebasSphinxService } from "@core/services/ithebas-sphinx-service";
import {IGaiaService} from "@core/services";

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
      "gaia_persephone.topic": {
        "admin.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerAdminQueue(messageBatch);
        },
        "newOrderSingle.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerNewOrderSingleQueue(messageBatch);
        },
        "orderCancelReplaceRequest.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerOrderCancelReplaceRequestQueue(messageBatch);
        },
        "orderCancelRequest.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerOrderCancelRequestQueue(messageBatch);
        },
        "executionReport.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerExecutionReportQueue(messageBatch);
        },
        "orderCancelReject.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerOrderCancelRejectQueue(messageBatch);
        }
      }
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
    "gaia_persephone.topic": {
      0: "admin.queue",
      1: "newOrderSingle.queue",
      2: "orderCancelReplaceRequest.queue",
      3: "orderCancelRequest.queue",
      4: "executionReport.queue",
      5: "orderCancelReject.queue",
    }
  };

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
