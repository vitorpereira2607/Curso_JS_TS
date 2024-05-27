'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        projectName: 'React Jira Clone',
        url: 'https://github.com/trungk18/jira-clone-angular',
        description: 'React jira clone app - by Vitor Pereira',
        categoryId: 3,
        userId: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        projectName: 'Contacts Project',
        url: 'https://github.com/vitorpereira2607/Curso_JS_TS/tree/server',
        description: 'Nodejs, Express, Mongodb app - by Vitor Pereira',
        categoryId: 2,
        userId: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        projectName: 'Contacts Project 2',
        url: 'https://github.com/vitorpereira2607/Curso_JS_TS/tree/server',
        description: 'Nodejs, Express, Mongodb app - by Vitor Pereira',
        categoryId: 1,
        userId: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        projectName: 'Contacts Project 3',
        url: 'https://github.com/vitorpereira2607/Curso_JS_TS/tree/server',
        description: 'Nodejs, Express, Mongodb app - by Vitor Pereira',
        categoryId: 3,
        userId: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  }

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
