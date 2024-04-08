import express from 'express';

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

  }
}

export default new App().app;
