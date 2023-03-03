import { ResourceOptions } from "adminjs";

export const veiculoResourceOptions: ResourceOptions = {
  navigation: "Socios",
  editProperties: ["marca", "placa", "socioId"],
  filterProperties: ["placa", "marca", "createdAt", "updatedAt"],
  listProperties: ["marca", "placa", "socioId"],
  showProperties: ["marca", "placa", "createdAt", "updatedAt", "socioId"],
};
