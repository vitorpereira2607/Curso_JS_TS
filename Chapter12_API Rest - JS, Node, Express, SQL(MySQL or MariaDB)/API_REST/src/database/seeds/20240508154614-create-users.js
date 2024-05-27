const bcryptjs = require('bcryptjs');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', [
      {
      username:'jmaria23',
      name: 'Joao',
      surname: 'Maria',
      password_hash: await bcryptjs.hash('12345', 8),
      email:'joaomaria@gmail.com',
      photo:'jmaria.png',
      created_at: new Date(),
      updated_at: new Date(),
     },
     {
      username:'biatacarlos30',
      name: 'Carlos',
      surname: 'Baeta',
      password_hash: await bcryptjs.hash('12345', 8),
      email:'carlosbiata@gmail.com',
      photo:'',
      created_at: new Date(),
      updated_at: new Date(),
     },
     {
      username:'lheoskeltu',
      name: 'Lheo',
      surname: 'Cecilhe',
      password_hash: await bcryptjs.hash('12345', 8),
      email:'lheoskeltu@gmail.com',
      photo:'',
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
