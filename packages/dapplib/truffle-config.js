require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember honey hockey produce bone tape'; 
let testAccounts = [
"0x7575de938c46dffc72261ef25c78ce340b1ee41b573955c9893f4144d33194bb",
"0x191b58d4a1460f4a3944972a7478fc534fea7025fcfc6f63c960f44df8e3d4df",
"0x6448278addf397ff36219df1ab31f591ac190f06cf490b20e98cb22f961bfd4a",
"0xe28970402d91c0ee6fc6eba68edb4068e4410e528fc662066cfe0676a41d0361",
"0x22063c02942c661a6f045e3282823f900da873c9274375eca0c5f04fdca8ecad",
"0x4eae594caae921cffc444a6d1b330e65de9bd9e8b64aeabbb30aba23515c6b92",
"0x1a5b8fbc30ab91de8c221eb8b3ac4757dd4fc526f58c59f380b76211f46ac6f1",
"0xd06ae820d84ce4f63c5ec1aa3afdef02f4c9e4cb99fa18c3ee77fd9fc8ec3679",
"0x04f5924ef121c956d8563578deaddc06d0f861d0423c2516981617540d93a8c1",
"0x01a898eed74f830d2a39a288b8b7b0dcaa4295c7be12e35cce0beb63f8399a81"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


