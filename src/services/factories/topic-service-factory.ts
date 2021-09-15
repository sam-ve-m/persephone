import { ThebasSphinxService } from "@service/thebas-sphinx-service";
import { ThebasSphinxRepository } from "@repository/thebas-sphinx-repository";
import { GaiaService } from "@service/gaia-service";
import { GaiaRepository } from "@repository/gaia-repository";

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
      "gaia_persephone.topic": () => {
        const gaiaRepository = new GaiaRepository();
        const gaiaService = new GaiaService(
            gaiaRepository
        );
        return gaiaService;
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
