import AdminJS, { PageHandler } from "adminjs";
import { Admins, Depoimentos, Deps, Socios } from "../models";

export const dashboardOptions: {
  handler?: PageHandler,
  component?: string,
  
} = {
  component: AdminJS.bundle("./components/Dashboard"),
  handler: async (req, res, context) =>{
    const socios = await Socios.count();
    const dependentes = await Deps.count();
    const admins = await Admins.count();
    const depoimentos = await Depoimentos.count();

    res.json({
      "socios": socios,
      'dependentes': dependentes,
      'administradores': admins,
      'depoimentos': depoimentos
    })
  }
}