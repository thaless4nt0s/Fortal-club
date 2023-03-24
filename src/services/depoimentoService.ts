import {
  DepoimentoCreationAttributes,
  Depoimentos,
} from "../models/Depoimento";
import { socioExists } from "./socioService";

export const depoimentoService = {
  mostrarTodosDepoimentos: async () => {
    return await Depoimentos.findAll();
  },

  depoimentoSocio: async (socioId: number) => {
    const depoimento = await Depoimentos.findAll({ where: { socioId } });
    return depoimento;
  },

  atualizarDepoimento: async (
    attributes: DepoimentoCreationAttributes,
    id: number
  ) => {
    const { depoimento } = attributes;
    const idSessaoSocio = await socioExists();
    const atualizarDepoimento = await Depoimentos.findByPk(id, {
      attributes: ["id", "depoimento", "socioId"],
    });
    if (atualizarDepoimento?.socioId !== idSessaoSocio) {
      throw new Error("O depoimento não corresponde ao usuário !");
    }
    atualizarDepoimento?.update({ depoimento });
  },

  criarDepoimento: async (
    socioId: number,
    attributes: DepoimentoCreationAttributes
  ) => {
    attributes["socioId"] = socioId;
    const depoimentoNovo = await Depoimentos.create(attributes);
    return depoimentoNovo;
  },

  removerDepoimento: async (id: number) => {
    const socioId = await socioExists();
    const depoimentoDeletado = await Depoimentos.destroy({
      where: {
        id,
        socioId,
      },
    });
    return depoimentoDeletado;
  },
};
