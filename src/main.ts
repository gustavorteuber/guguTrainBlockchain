// src/index.ts
import { Blockchain } from './domain/Blockchain';
import { Transaction } from './domain/Transaction';

function simulateBlockchain() {
  const blockchain = new Blockchain();

  console.log('=== Blockchain Inicializada ===');
  console.log('Bloco Gênese:', blockchain.chain[0]);

  // Criando transações (vagões)
  const transaction1 = new Transaction('Alice', 'Bob', 50, 'assinatura-alice');
  const transaction2 = new Transaction('Bob', 'Charlie', 20, 'assinatura-bob');
  const transaction3 = new Transaction('Charlie', 'Alice', 10, 'assinatura-charlie');

  // Adicionando vagões (blocos) à blockchain
  console.log('\nAdicionando bloco 1 (Vagão 1) com uma transação...');
  blockchain.addBlock([transaction1]);
  console.log('Bloco adicionado:', blockchain.getLatestBlock());

  console.log('\nAdicionando bloco 2 (Vagão 2) com duas transações...');
  blockchain.addBlock([transaction2, transaction3]);
  console.log('Bloco adicionado:', blockchain.getLatestBlock());

  // Verificando se a blockchain é válida
  const isValid = blockchain.isValid();
  console.log(`\nA blockchain é válida? ${isValid ? 'Sim' : 'Não'}`);

  // Mostrando toda a cadeia de blocos
  console.log('\n=== Toda a cadeia de blocos ===');
  blockchain.chain.forEach((block, index) => {
    console.log(`Bloco ${index}:`, block);
  });
}

simulateBlockchain();
