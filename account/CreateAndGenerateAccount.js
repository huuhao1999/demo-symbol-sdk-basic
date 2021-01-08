const symbol_sdk_1 = require('symbol-sdk');
/* start block 01 */
const account = symbol_sdk_1.Account.generateNewAccount(
  symbol_sdk_1.NetworkType.TEST_NET,
);
console.log(
  'Your new account address is:',
  account.address.pretty(),
  'and its private key',
  account.privateKey,
);
/* end block 01 */
