import { ThebasSphinxService } from "@service/thebas-sphinx-service";

import { ThebasSphinxRepository } from "@repository/thebas-sphinx-repository";

export module TopicServiceFactory {
  export const registerTopicFactoriesService = () => {
    const topicPartitionToService = {
      "thebes.sphinx_persephone.topic": () => {
        const thebasSphinxRepository = new ThebasSphinxRepository();
        const thebasSphinxService = new ThebasSphinxService(
          thebasSphinxRepository
        );
        return thebasSphinxService;
      },
    };

    return topicPartitionToService;
  };

  export const getServiceToHandleParitionMessage = (
    topic: string,
    topicPartitionToService: Object
  ) => {
    const topicServiceFactory = topicPartitionToService[topic];
    const topicServiceInstance = topicServiceFactory();

    return topicServiceInstance;
  };
}
