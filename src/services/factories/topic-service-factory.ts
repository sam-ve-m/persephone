import { AetherRepository } from "@repository/aether-repository";
import { AetherService } from "@service/aether-service";

import { GaiaRepository } from "@repository/gaia-repository";
import { GaiaService } from "@service/gaia-service";

import { HermesRepository } from "@repository/hermes-repository";
import { HermesService } from "@service/hermes-service";

import { HyperionRepository } from "@repository/hyperion-repository";
import { HyperionService } from "@service/hyperion-service";

import { SphinxService } from "@service/sphinx-service";
import { SphinxRepository } from "@repository/sphinx-repository";

export module TopicServiceFactory {
  export const registerTopicFactoriesService = () => {
    const topicPartitionToService = {
      "aether_persephone.orders": () => {
        const aetherRepository = new AetherRepository();
        return new AetherService(aetherRepository);
      },
      "aether_persephone.invalid_orders": () => {
        const aetherRepository = new AetherRepository();
        return new AetherService(aetherRepository);
      },
      "gaia_persephone.orders": () => {
        const gaiaRepository = new GaiaRepository();
        return new GaiaService(gaiaRepository);
      },
      "gaia_persephone.responses": () => {
        const gaiaRepository = new GaiaRepository();
        return new GaiaService(gaiaRepository);
      },
      "gaia_persephone.session_messages": () => {
        const gaiaRepository = new GaiaRepository();
        return new GaiaService(gaiaRepository);
      },
      "hermes_persephone.order_session.authenticity": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes_persephone.order_session.integrity": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes_persephone.trade_sessions.create": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes_persephone.received_orders": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes_persephone.sent_orders": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes_persephone.report_orders": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hyperion_persephone.responses": () => {
        const hyperionRepository = new HyperionRepository();
        return new HyperionService(hyperionRepository);
      },
      "sphinx_persephone.user.crud": () => {
        const sphinxRepository = new SphinxRepository();
        return new SphinxService(sphinxRepository);
      },
      "sphinx_persephone.user.authentication": () => {
        const sphinxRepository = new SphinxRepository();
        return new SphinxService(sphinxRepository);
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
