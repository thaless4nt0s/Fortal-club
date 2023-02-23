import { ResourceOptions } from "adminjs";

export const socioResourceOptions: ResourceOptions = {
  navigation: "Socios",
  editProperties: ['nome', 'email', 'senha'],
  filterProperties: ['nome', 'email', 'createdAt', 'updatedAt'],
  listProperties: ['nome', 'email', 'id'],
  showProperties: ['id','nome', 'email', 'createdAt', 'updatedAt']
}