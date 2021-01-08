
const symbol_sdk_1 = require('symbol-sdk');
/* start block 01 */
// replace with address
const rawAddress = 'TCBMDTBQSBIJ6JS72ZPVFZTTXZIW7QP33QYVJ5I';
const address = symbol_sdk_1.Address.createFromRawAddress(rawAddress);
// replace with node endpoint
const nodeUrl = 'http://64.225.26.171:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const restrictionHttp = repositoryFactory.createRestrictionAccountRepository();
restrictionHttp.getAccountRestrictions(address).subscribe(
  (accountRestrictions) => {
    if (accountRestrictions.length > 0) {
      accountRestrictions
        .filter((accountRestriction) => accountRestriction.values.length > 0)
        .map((accountRestriction) => {
          console.log(
            '\n',
            accountRestriction.restrictionFlags,
            accountRestriction.values.toString(),
          );
        });
    } else {
      console.log('The address does not have account restriction assigned.');
    }
  },
  (err) => console.log(err),
);
