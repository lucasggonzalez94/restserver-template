const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.send('Hola mundo')
    });
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Listen on port: ${this.PORT}`)
    });
  }
};

module.exports = Server;