import { Server } from './presentation/server';
import { envs } from './config';
import { AppRoutes } from './presentation/routes';

(() => {
  main();
})();
async function main() {
  // TODO: await const
  // TODO: server init
  new Server({ port: envs.PORT, routes: AppRoutes.routes }).start();
}
