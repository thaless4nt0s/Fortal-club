import { getIdBySession } from "../controllers/authController";
import { Deps } from "../models";
import { socioService } from "./socioService";

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
  deleteDep: async (id: number) => {
    const socioId = await getIdBySession();
    const socio = await socioService.findByIdWithSocios(socioId.toString());
    if (!socio) {
      throw new Error("O usuário não está logado !!");
    }
    const dependente = await Deps.destroy({
      where: {
        id,
        socioId,
      },
    });
    return dependente;
  },
};
