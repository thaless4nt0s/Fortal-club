"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const [socios] = await queryInterface.sequelize.query(
      "SELECT id FROM socios;"
    );
    await queryInterface.bulkInsert(
      "veiculos",
      [
        {
          marca: "classic",
          placa: "AAAA000",
          created_at: new Date(),
          updated_at: new Date(),
          socio_id: socios[0].id,
        },
        {
          marca: "corsa",
          placa: "BBBB000",
          created_at: new Date(),
          updated_at: new Date(),
          socio_id: socios[1].id,
        },
        {
          marca: "creta",
          placa: "CCCC000",
          created_at: new Date(),
          updated_at: new Date(),
          socio_id: socios[2].id,
        },
        {
          marca: "palio",
          placa: "DDDD000",
          created_at: new Date(),
          updated_at: new Date(),
          socio_id: socios[3].id,
        },
        {
          marca: "siena",
          placa: "EEEE000",
          created_at: new Date(),
          updated_at: new Date(),
          socio_id: socios[4].id,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("veiculos", null, {});
  },
};
