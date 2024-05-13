'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
      categoryName:'Business',
      created_at: new Date(),
      updated_at: new Date(),
     },
     {
      categoryName:'Marketing',
      created_at: new Date(),
      updated_at: new Date(),
     },
     {
      categoryName:'Software',
      created_at: new Date(),
      updated_at: new Date(),
     }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
