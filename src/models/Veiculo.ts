import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Veiculos {
  id: number
  marca: string
  placa: string
  socioId: number
}

export interface VeiculoCreationAttributes extends Optional<Veiculos, "id"> {}

// Instancia de um veículo, de um model veículo, vai possuir todas as prop e metodos que o sequelize pssui
export interface VeiculoInstance
  extends Model<Veiculos, VeiculoCreationAttributes>,
    Veiculos {}

export const Veiculos = sequelize.define<VeiculoInstance, Veiculos>(
  "veiculos",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    marca: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    placa: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    socioId: {
      allowNull: true,
      references: { model: "socios", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
      type: DataTypes.INTEGER
    },
  }
);
