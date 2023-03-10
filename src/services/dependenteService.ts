import { Deps } from "../models";

export const dependenteService = {
  findAllDeps: async () => {
    const dependentes = await Deps.findAll({
      attributes: ["id", "nome", "createdAt", "socio_id"],
    });
    return dependentes;
  },
  findDepById: async (id: number) => {
    const dependente = await Deps.findByPk(id, {attributes: ['id', 'nome']});
    return dependente;
  },
};
