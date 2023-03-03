"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "socios",
      [
        {
          nome: "Alberto",
          email: "alberto@gmail.com",
          senha: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Bruno",
          email: "bruno@gmail.com",
          senha: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Carlos",
          email: "carlos@gmail.com",
          senha: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Diego",
          email: "diego@gmail.com",
          senha: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Ernesto",
          email: "ernesto@gmail.com",
          senha: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("socios", null, {});
  },
};
