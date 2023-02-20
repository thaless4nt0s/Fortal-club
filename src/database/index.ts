import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "fortalclub_development",
  username: "postgres",
  password: "120901",
  define: {
    underscored: true // converter o snake_case para camelCase
  }
});