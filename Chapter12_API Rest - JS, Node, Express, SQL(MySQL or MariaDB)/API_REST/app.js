import dotenv from 'dotenv';
dotenv.config();

import './src/config/database';

import express from 'express';
import homeRoute from './src/routes/homeRoutes';
import userRoute from './src/routes/userRoutes'


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extend: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users/', userRoute);
  }
}

export default new App().app;
