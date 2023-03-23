import { Veiculos } from "../models";
import { VeiculoCreationAttributes } from "../models/Veiculo";
import { socioExists } from "./socioService";

export const veiculoService = {
  veiculoSocio: async (socioId: number) => {
    const veiculo = await Veiculos.findAll({ where: { socioId } });
    return veiculo;
  },
  atualizarVeiculo: async (
    attributes: VeiculoCreationAttributes,
    id: number
  ) => {
    const { marca, placa } = attributes;
    const socioIdSession = await socioExists();
    const veiculo = await Veiculos.findByPk(id, {
      attributes: ["id", "socioId"],
    });
    if (veiculo?.socioId !== socioIdSession) {
      throw new Error("O veículo não corresponde ao usuário !");
    }
    veiculo?.update({ marca, placa });
    return veiculo;
  },
  criarVeiculo: async (
    socioId: number,
    attributes: VeiculoCreationAttributes
  ) => {
    attributes["socioId"] = socioId;
    const veiculoNovo = await Veiculos.create(attributes);
    return veiculoNovo;
  },
  removerVeiculo: async (id: number) => {
    const socioId = await socioExists();
    const veiculo = await Veiculos.destroy({
      where: {
        id,
        socioId,
      },
    });
    return veiculo;
  },
};
