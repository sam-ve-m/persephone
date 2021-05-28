import { ThebasSphinxService } from "@service/thebas-sphinx-service";

export module TopicServiceFactory {
  export const registerTopicFactoriesService = () => {
    const topicPartitionToService = {
      "thebes.sphinx.topic": () => {
        const thebasSphinxService = new ThebasSphinxService();
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
