import { Blockchain } from '../domain/Blockchain';
import { Transaction } from '../domain/Transaction';

describe('Blockchain', () => {
  it('deve iniciar com um bloco gênese', () => {
    const blockchain = new Blockchain();
    expect(blockchain.chain.length).toBe(1);
  });

  it('deve adicionar um novo bloco', () => {
    const blockchain = new Blockchain();
    const transactions = [new Transaction('Alice', 'Bob', 100, 'assinatura-123')];
    blockchain.addBlock(transactions);
    expect(blockchain.chain.length).toBe(2);
  });

  it('deve validar a cadeia de blocos', () => {
    const blockchain = new Blockchain();
    const transactions = [new Transaction('Alice', 'Bob', 100, 'assinatura-123')];
    blockchain.addBlock(transactions);
    expect(blockchain.isValid()).toBe(true);
  });
});