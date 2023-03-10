import { ResourceOptions } from "adminjs";

export const adminResourceOptions: ResourceOptions = {
  properties: {
    senha: {
      type: "password",
    },
  },
  navigation: "Administradores",
  editProperties: ["nome", "email", "senha"],
  filterProperties: ["nome", "email", "createdAt", "updatedAt"],
  listProperties: ["nome", "email", "id"],
  showProperties: ["id", "nome", "email", "createdAt", "updatedAt"],
};
