import { Deps } from "../models";
import { DependenteCreationAttributes } from "../models/Dependente";
import { socioExists } from "./socioService";

export const dependenteService = {
  findAllDeps: async () => {
    const dependentes = await Deps.findAll({
      attributes: ["id", "nome", "createdAt", "socio_id"],
    });
    return dependentes;
  },
  findDepById: async (id: number) => {
    const dependente = await Deps.findByPk(id, { attributes: ["id", "nome"] });
    return dependente;
  },
  deleteDepBySocio: async (socioId: number) => {
    await socioExists();
    await Deps.destroy({
      where: {
        socioId,
      },
    });
  },
  deleteDep: async (id: number) => {
    const socioId = await socioExists();
    const dependente = await Deps.destroy({
      where: {
        id,
        socioId,
      },
    });
    return dependente;
  },
  updateDep: async (attributes: DependenteCreationAttributes) => {
    const socioId = await socioExists();
    const { id, nome } = await attributes;
    const depUpdate = await Deps.findByPk(id, {
      attributes: ["id", "nome", "socioId"],
    });
    if (socioId !== depUpdate?.socioId) {
      throw new Error("Dependente não pertence ao sócio que está logado !!");
    }
    depUpdate?.update({ nome: nome });
    return depUpdate;
  },
  createDep: async (attributes: DependenteCreationAttributes) => {
    const socioId = await socioExists();
    attributes["socioId"] = socioId;
    const novoDependente = await Deps.create(attributes);
    return novoDependente;
  },
};
