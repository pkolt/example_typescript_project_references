import express from 'express';
import { HELLO_WORLD } from '../../shared/dist';

const SERVER_HOST = 'localhost';
const SERVER_PORT = 3000;

export const startServer = async () => {
  const app = express();

  app.get('/', (req, res) => {
    res.send(HELLO_WORLD);
  });

  app.listen(SERVER_PORT, () => {
    console.log(`Start Express app http://${SERVER_HOST}:${SERVER_PORT}`);
  });
};

if (require.main === module) {
  startServer().catch(console.error);
}
