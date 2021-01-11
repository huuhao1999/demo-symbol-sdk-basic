'use strict';

 
Object.defineProperty(exports, '__esModule', { value: true });
const symbol_sdk_1 = require('symbol-sdk');
const nodeUrl = 'http://api-01.us-west-1.0.10.0.x.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const blockHttp = repositoryFactory.createBlockRepository();
const height = 1;
blockHttp.getBlockByHeight(symbol_sdk_1.UInt64.fromUint(height)).subscribe(
  (block) => console.log(block),
  (err) => console.error(err),
);

