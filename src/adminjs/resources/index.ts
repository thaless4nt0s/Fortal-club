import { ResourceWithOptions } from "adminjs";
import { adminResourceOptions } from "./admin";
import { Admins, Socios, Veiculos } from "../../models";
import { socioResourceOptions } from "./socio";
import { veiculoResourceOptions } from "./veiculo";

export const adminJsResoucers: ResourceWithOptions[] = [
  {
    resource: Admins,
    options: adminResourceOptions
  },
  {
    resource: Socios,
    options: socioResourceOptions
  },
  {
    resource: Veiculos,
    options: veiculoResourceOptions
  }
]