import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Depoimentos {
  id: number;
  depoimento: string;
  socioId: number;
}

export interface DepoimentoCreationAttributes
  extends Optional<Depoimentos, "id"> {}

// Instancia de um depoimento, de um model depoimento, vai possuir todas as prop e metodos que o sequelize pssui
export interface DepoimentoInstance
  extends Model<Depoimentos, DepoimentoCreationAttributes>,
    Depoimentos {}

export const Depoimentos = sequelize.define<DepoimentoInstance, Depoimentos>(
  "depoimentos",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    depoimento: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    socioId: {
      allowNull: false,
      references: { model: "socios", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
      type: DataTypes.INTEGER,
    },
  }
);
