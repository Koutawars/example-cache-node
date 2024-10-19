// usar Server.ts para iniciar el servidor
import { Server } from './aplication/Server';

const server = new Server();

server.config();

server.routes();

server.start();