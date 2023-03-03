"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const [socios] = await queryInterface.sequelize.query(
      "SELECT id FROM socios;"
    );
    await queryInterface.bulkInsert(
      "deps",
      [
        {
          nome: "Paulo",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Victor",
          socio_id: socios[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Sergio",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Hermes",
          socio_id: socios[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Claudio",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Pedro",
          socio_id: socios[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Marcos",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Fabio",
          socio_id: socios[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Greg",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Daniel",
          socio_id: socios[2].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Eduardo",
          socio_id: socios[2].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Victor",
          socio_id: socios[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Gustavo",
          socio_id: socios[2].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jimmy",
          socio_id: socios[3].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Bob",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Thales",
          socio_id: socios[3].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Marcondes",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Bárbara",
          socio_id: socios[4].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Larissa",
          socio_id: socios[4].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luana",
          socio_id: socios[4].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("deps", null, {});
  },
};
