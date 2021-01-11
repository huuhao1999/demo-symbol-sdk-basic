
const symbol_sdk_1 = require('symbol-sdk');
const nodeUrl = 'http://api-01.us-east-1.0.10.0.x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const listener = repositoryFactory.createListener();
listener.open().then(() => {
  listener.newBlock().subscribe(
    (block) => {
      console.log(block);
      listener.close();
    },
    (err) => console.error(err),
  );
});
