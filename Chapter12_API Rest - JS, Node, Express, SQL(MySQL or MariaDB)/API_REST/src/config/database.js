
//CONSIGO INSERIR UTILIZADORES NA BASE DE DADOS MAS NÃO CONSIGO MIGRAR => npx sequelize db:migrate
const { Sequelize } = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize({
//   dialect: 'mariadb',
//   host: process.env.DATABASE_HOST,
//   port: process.env.DATABASE_PORT,
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at',
//   },
//   dialectOptions: {
//     timezone: 'Europe/Lisbon',
//   },
//   timezone: 'Europe/Lisbon',
// });

// module.exports = sequelize;

// //DESTA FORMA CONSIGo MIGRAR MAS NÃO CONSIGO INSERIR DADOS NA BASE DE DADOS
module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'Europe/Lisbon',
  },
  timezone: 'Europe/Lisbon',
}

