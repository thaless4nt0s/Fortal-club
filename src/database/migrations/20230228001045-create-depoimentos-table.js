'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("depoimentos",{
      id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      depoimento:{
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      socio_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'socios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("depoimentos");
  }
};
