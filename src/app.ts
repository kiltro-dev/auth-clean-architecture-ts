import { Server } from './presentation/server';

(() => {
  main();
})();
async function main() {
  // TODO: await const
  // TODO: server init
  new Server({}).start();
}
