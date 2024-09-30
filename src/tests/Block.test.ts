import { Block } from '../domain/Block';
import { Transaction } from '../domain/Transaction';

describe('Block', () => {
  it('deve criar um bloco válido', () => {
    const transactions = [new Transaction('Alice', 'Bob', 50, 'assinatura-123')];
    const block = new Block('0', transactions);
    expect(block.previousHash).toBe('0');
    expect(block.transactions.length).toBe(1);
  });
});