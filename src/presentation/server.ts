import express from 'express';
import { envs } from '../config';

interface Options {
  port?: number;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  constructor(options: Options) {
    const { port = 3100 } = options;
    this.port = port;
  }
  async start() {
    this.app.listen(envs.PORT, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
