# Gerador de carteiras de bitcoin

Este projeto é um gerador de carteiras de bitcoin que utiliza a biblioteca `bitcoinjs-lib` para criar carteiras HD (Hierarchical Deterministic) a partir de uma frase mnemônica.

## Funcionalidades

- Geração de uma nova carteira Bitcoin.
- Derivação de endereços a partir de uma carteira HD.
- Suporte para a rede de testes (testnet).

## Dependências

- `bip32`: Para a criação de carteiras HD.
- `bip39`: Para a geração de frases mnemônicas.
- `bitcoinjs-lib`: Para a criação e manipulação de transações Bitcoin.

## Uso

1. Clone o repositório.
2. Instale as dependências:

```bash
npm install
```

3. Execute o script para gerar uma nova carteira:

```bash
node createWallet.js
```
