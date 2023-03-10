import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import bcrypt from 'bcrypt';
export interface Admins {
  id: number
  nome: string
  email: string
  senha: string
} // Dizer o formato do objeto da nossa tabela de admin

// Atributos que serão usados para criar um administrador no banco de dados
export interface AdminCreationAttributes extends Optional<Admins, "id"> {}

// Instancia de um admin, de um model admin, vai possuir todas as prop e metodos que o sequelize pssui
export interface AdminInstance extends Model<Admins, AdminCreationAttributes>, Admins {}

export const Admins = sequelize.define<AdminInstance, Admins>("admins", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  nome: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    validate:{
      isEmail: true
    }
  },
  senha:{
    allowNull: false,
    type: DataTypes.STRING
  }
}, {
    hooks:{
      beforeSave: async(admin)=>{
        if(admin.isNewRecord || admin.changed("senha")){
          admin.senha = await bcrypt.hash(admin.senha.toString(), 10);
        }
      }
    }
  }
);
