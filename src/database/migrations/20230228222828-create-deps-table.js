'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("deps",{
      id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      nome:{
        allowNoll: false,
        type: Sequelize.DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      socio_id:{
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'socios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("deps");
  }
};
