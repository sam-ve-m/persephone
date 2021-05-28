import { ThebasSphinxRepository } from "@root/src/repositories";
import { ThebasSphinxService } from "@service/thebas-sphinx-service";

export module TopicServiceFactory {
  export const registerTopicFactoriesService = () => {
    const topicPartitionToService = {
      "thebes.sphinx.topic": () => {
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
