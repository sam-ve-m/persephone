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

import { EbisuService } from "@service/ebisu-service"
import { EbisuRepository } from "@repository/ebisu-repository"

export module TopicServiceFactory {
  export const registerTopicFactoriesService = () => {
    const topicPartitionToService = {
      "aether-persephone.orders": () => {
        const aetherRepository = new AetherRepository();
        return new AetherService(aetherRepository);
      },
      "aether-persephone.invalid-orders": () => {
        const aetherRepository = new AetherRepository();
        return new AetherService(aetherRepository);
      },
      "gaia-persephone.orders": () => {
        const gaiaRepository = new GaiaRepository();
        return new GaiaService(gaiaRepository);
      },
      "gaia-persephone.responses": () => {
        const gaiaRepository = new GaiaRepository();
        return new GaiaService(gaiaRepository);
      },
      "gaia-persephone.session-messages": () => {
        const gaiaRepository = new GaiaRepository();
        return new GaiaService(gaiaRepository);
      },
      "hermes-persephone.order-session.authenticity": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes-persephone.order-session.integrity": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes-persephone.trade-sessions.create": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes-persephone.received-orders": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes-persephone.sent-orders": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hermes-persephone.report-orders": () => {
        const hermesRepository = new HermesRepository();
        return new HermesService(hermesRepository);
      },
      "hyperion-persephone.responses": () => {
        const hyperionRepository = new HyperionRepository();
        return new HyperionService(hyperionRepository);
      },
      "sphinx-persephone.user.crud": () => {
        const sphinxRepository = new SphinxRepository();
        return new SphinxService(sphinxRepository);
      },
      "sphinx-persephone.user.authentication": () => {
        const sphinxRepository = new SphinxRepository();
        return new SphinxService(sphinxRepository);
      },
      "ebisu-persephone.client.bank_account": () => {
        const ebisuRepository = new EbisuRepository();
        return new EbisuService(ebisuRepository);
      },
      "ebisu-persephone.money_movement.exchange_forex": () => {
        const ebisuRepository = new EbisuRepository();
        return new EbisuService(ebisuRepository);
      },
      "ebisu-persephone.money_movement.transference": () => {
        const ebisuRepository = new EbisuRepository();
        return new EbisuService(ebisuRepository);
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
