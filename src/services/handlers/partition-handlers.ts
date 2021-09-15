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
        "new.order.single.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerNewOrderSingleQueue(messageBatch);
        },
        "order.cancel.replace.request.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerOrderCancelReplaceRequestQueue(messageBatch);
        },
        "order.cancel.request.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerOrderCancelRequestQueue(messageBatch);
        },
        "execution.report.queue": (
            gaiaService: IGaiaService,
            messageBatch: KafkaMessage[]
        ) => {
          gaiaService.handlerExecutionReportQueue(messageBatch);
        },
        "order.cancel.reject.queue": (
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
      1: "new.order.single.queue",
      2: "order.cancel.replace.request.queue",
      3: "order.cancel.request.queue",
      4: "execution.report.queue",
      5: "order.cancel.reject.queue",
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
