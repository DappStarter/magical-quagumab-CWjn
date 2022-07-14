require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth shift promote guess problem flame shadow'; 
let testAccounts = [
"0x72854bff963838bc65c2a84f6bb51687f6cc481c4989894f96e47f9ab2437fa4",
"0xe51584ae1be031e0adaf241aadcd30a5dcfa13274dad0828529916ddceb7b88e",
"0x8808c46c677111d6738e8f02816f498a98028165478082072159a771d0c5c6ee",
"0x846c6d074b929b76f0ee2a85824c46fa9402de5010532add056bed3c8c6317a7",
"0xd4675e5ac7ae58c87cb6da8979d0b7aae473500cd945a400ac79d9235a9d09f2",
"0xe220e49b2b882a2de25ab628f5d25f55efce8984e5686b8f2b813325bde2f28c",
"0xc164f3206682c58cb2477ae1adfed32f6960801461560b15edee9872d57fd54d",
"0x60efc2a4b8bdfa1ba7e6f45a04bb74644dc2b373dd6aaad257257970d37b3470",
"0x35f8866069c7815fa11e3dc5e45d5756f3c1a345f7dcb316c85e0e664a843392",
"0x53ae179f111e374e2a386cec2d348d994759adf53062d12b6c2707c69fef0752"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

