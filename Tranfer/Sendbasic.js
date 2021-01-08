const symbol_sdk_1 = require('symbol-sdk');
const example = async () => {
  // Network information
  const nodeUrl = 'http://64.225.26.171:3000';
  const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
  const epochAdjustment = await repositoryFactory
    .getEpochAdjustment()
    .toPromise();
  const networkType = await repositoryFactory.getNetworkType().toPromise();
  const networkGenerationHash = await repositoryFactory
    .getGenerationHash()
    .toPromise();
  // Returns the network main currency, symbol.xym
  const { currency } = await repositoryFactory.getCurrencies().toPromise();
  /* start block 01 */
  // replace with recipient address
  const rawAddress = 'TD7N3MJ2DUJKN73GG5LFWD3QZQLQCFWQFBPFL4Y';
  const recipientAddress = symbol_sdk_1.Address.createFromRawAddress(
    rawAddress,
  );
  const transferTransaction = symbol_sdk_1.TransferTransaction.create(
    symbol_sdk_1.Deadline.create(epochAdjustment),
    recipientAddress,
    [currency.createRelative(1000)],
    symbol_sdk_1.PlainMessage.create('This is a test message'),
    networkType,
    symbol_sdk_1.UInt64.fromUint(2000000),
  );
  /* end block 01 */
  /* start block 02 */
  // replace with sender private key
  const privateKey =
  '1979063C1B778A26A3CE8DDD6731EBE68B58183B6F108E3CA9EDCC6C4F567E93';
  const account = symbol_sdk_1.Account.createFromPrivateKey(
    privateKey,
    networkType,
  );
  const signedTransaction = account.sign(
    transferTransaction,
    networkGenerationHash,
  );
  console.log('Payload:', signedTransaction.payload);
  console.log('Transaction Hash:', signedTransaction.hash);
  /* end block 02 */
  /* start block 03 */
  const transactionRepository = repositoryFactory.createTransactionRepository();
  const response = await transactionRepository
    .announce(signedTransaction)
    .toPromise();
  console.log(response);
  /* end block 03 */
};
example().then();
