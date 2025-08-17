import bip32 from 'bip32';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';

// define a rede
// Use testnet para fins de teste
const network = bitcoin.networks.testnet;

// carteira determinística hierárquica (Hierarchical Deterministic Wallet - HD Wallet)
// O caminho padrão para carteiras HD é "m/44'/0'/0'/0/0"
const path = "m/49'/1'/0'/0/0";

// Gera uma frase mnemônica
// Exemplo: "abandon ability able about above absent absorb abstract absurd abuse access accident"
const mnemonic = bip39.generateMnemonic();

// Gera a seed a partir da mnemônica
// A seed é uma representação binária da frase mnemônica
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Cria o nó raiz a partir da seed
// O nó raiz é o ponto de partida para a derivação de endereços
const root = bip32.fromSeed(seed, network);

// Deriva o nó para o primeiro endereço
// O caminho derivado é "m/49'/1'/0'/0/0"
const node = root.derive(0).derive(0);

// Gera endereço compatível com o caminho m/49'
// É um endereço P2PKH (Pay-to-Public-Key-Hash)
const { address: btcAddress } = bitcoin.payments.p2pkh({ pubkey: node.publicKey, network });

console.log("Carteira Bitcoin:");
console.log(`- Endereço: ${btcAddress}`);
console.log(`- Chave Pública: ${node.publicKey.toString('hex')}`);
console.log(`- Chave Privada: ${node.toWIF()}`);
console.log(`- Frase Mnemônica: ${mnemonic}`);
