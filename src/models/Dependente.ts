import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Deps {
  id: number;
  nome: string;
  socioId: number;
}

export interface DependenteCreationAttributes extends Optional<Deps, "id"> {}

// Instancia de um dependente, de um model dependente, vai possuir todas as prop e metodos que o sequelize pssui
export interface DependenteInstance
  extends Model<Deps, DependenteCreationAttributes>,
    Deps {}

export const Deps = sequelize.define<DependenteInstance, Deps>("deps", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nome: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  socioId: {
    allowNull: false,
    references: { model: "socios", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
    type: DataTypes.INTEGER,
  },
});
