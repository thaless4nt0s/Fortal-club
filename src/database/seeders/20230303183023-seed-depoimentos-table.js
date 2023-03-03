"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const [socios] = await queryInterface.sequelize.query(
      "SELECT id FROM socios;"
    );
    await queryInterface.bulkInsert(
      "depoimentos",
      [
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[2].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[3].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[4].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[2].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[3].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[4].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          depoimento:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          socio_id: socios[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("depoimentos", null, {});
  },
};
