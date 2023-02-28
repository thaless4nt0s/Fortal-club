import { ResourceOptions } from "adminjs";

export const dependentesResourceOptions: ResourceOptions = {
  navigation: "Socios",
  editProperties: ["nome", "socioId"],
  filterProperties: ["nome", "socioId"],
  listProperties: ["nome", "socioId"],
  showProperties: ["id", "nome", "socioId", "createdAt", "updatedAt"],
};