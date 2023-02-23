'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("socios",{
      id:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      nome:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      email:{
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING
      },created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      id_veiculo:{
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {model: "veiculos", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      id_depoimento:{
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {model: "depoimentos", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      id_dependente:{
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {model: "dependentes", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("socios")
  }
};
