import { Socios } from "../models";
import { SocioCreationAttributes } from "../models/Socio";

export const socioService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage;

    const { count, rows } = await Socios.findAndCountAll({
      attributes: ["id", "nome", "email"],
      order: [["id", "ASC"]],
      limit: perPage,
      offset: offset,
    }); //Encontra todos os socios

    return {
      socios: rows,
      page,
      perPage,
      total: count,
    };
  },

  findByIdWithSocios: async (id: string) => {
    const socioWithDependentes = await Socios.findByPk(id, {
      attributes: ["id", "nome", "email"],
      include: {
        association: "deps",
        attributes: ["id", "nome"],
      },
    });
    return socioWithDependentes;
  },
  findByEmail: async(email: string)=>{
    const socio = await Socios.findOne({where: {email}});
    return socio;
  },
  create: async (attributes: SocioCreationAttributes) => {
    const newSocio = await Socios.create(attributes);
    return newSocio;
  },
  delete: async(id: number)=>{
    const socio = await Socios.destroy({where:{id}});
    return socio;
  }
};
