import { ResourceOptions } from "adminjs";

export const depoimentosResourceOptions: ResourceOptions = {
  navigation: "Socios",
  editProperties: ["depoimento", "socioId"],
  filterProperties: ["id","depoimento", "socioId"],
  listProperties: ["depoimento", "socioId"],
  showProperties: ["id", "depoimento", "socioId", "createdAt", "updatedAt"],
};
