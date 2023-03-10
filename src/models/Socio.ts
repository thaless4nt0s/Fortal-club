import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import bcrypt from 'bcrypt';

export interface Socios {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export interface SocioCreationAttributes extends Optional<Socios, "id"> {}

// Instancia de um sócio, de um model sócio, vai possuir todas as prop e metodos que o sequelize pssui
export interface SocioInstance
  extends Model<Socios, SocioCreationAttributes>,
    Socios {}

export const Socios = sequelize.define<SocioInstance, Socios>("socios", {
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
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  senha: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
    hooks:{
      beforeSave: async(socio)=>{
        if(socio.isNewRecord || socio.changed("senha")){
          socio.senha = await bcrypt.hash(socio.senha.toString(), 10);
        }
      }
    }
});
