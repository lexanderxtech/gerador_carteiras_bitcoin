import bip32 from 'bip32';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';

// define the network
// Use testnet for testing purposes
const network = bitcoin.networks.testnet;

// carteira determinística hierárquica
const path = "m/49'/1'/0'/0/0";

// Generate mnemonic
const mnemonic = bip39.generateMnemonic();

// Generate seed from mnemonic
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Create root node from seed
const root = bip32.fromSeed(seed, network);

// Derive the node for the first address (account 0, change 0, address index 0)
const node = root.derive(0).derive(0)

// Gera endereço compatível com o caminho m/49'
const { address: btcAddress } = bitcoin.payments.p2pkh({ pubkey: node.publicKey, network });

console.log("Carteira Bitcoin:");
console.log(`- Endereço: ${btcAddress}`);
console.log(`- Chave Pública: ${node.publicKey.toString('hex')}`);
console.log(`- Chave Privada: ${node.toWIF()}`);
console.log(`- Mnemonic: ${mnemonic}`);
