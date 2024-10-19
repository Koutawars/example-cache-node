// correr una app de node con ts-node

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from '../infrastructure/driving/route-express/';

export class Server {

  public app: express.Application;

  constructor() {
    this.app = express(); // inicializar express
    this.config(); // configurar express
    this.routes(); // configurar rutas
  }

  config(): void {
    this.app.set('port', process.env.PORT || 3000); // configurar puerto
    this.app.use(morgan('dev')); // configurar morgan
    this.app.use(cors()); // configurar cors
    this.app.use(express.json()); // configurar express para recibir json
    this.app.use(express.urlencoded({ extended: false })); // configurar express para recibir datos desde formularios
  }

  routes(): void {
    this.app.use('/', mainRouter);
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => { // iniciar servidor
      console.log('Server on port', this.app.get('port'));
    });
  }

}