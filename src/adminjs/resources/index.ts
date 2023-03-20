import { ResourceWithOptions } from "adminjs";
import { adminResourceOptions } from "./admin";
import { Admins, Deps, Depoimentos, Socios, Veiculos } from "../../models";
import { socioResourceOptions } from "./socio";
import { veiculoResourceOptions } from "./veiculo";
import { dependentesResourceOptions } from "./dependente";
import { depoimentosResourceOptions } from "./depoimento";

export const adminJsResoucers: ResourceWithOptions[] = [
  {
    resource: Admins,
    options: adminResourceOptions,
  },
  {
    resource: Socios,
    options: socioResourceOptions,
  },
  {
    resource: Deps,
    options: dependentesResourceOptions,
  },
  {
    resource: Depoimentos,
    options: depoimentosResourceOptions,
  },
  {
    resource: Veiculos,
    options: veiculoResourceOptions,
  }
];
