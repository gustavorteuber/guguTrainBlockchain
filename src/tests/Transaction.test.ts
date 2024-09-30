import { Transaction } from '../domain/Transaction';

describe('Transaction', () => {
  it('deve criar uma transação válida', () => {
    const transaction = new Transaction('Alice', 'Bob', 100, 'assinatura-123');
    expect(transaction.sender).toBe('Alice');
    expect(transaction.receiver).toBe('Bob');
    expect(transaction.amount).toBe(100);
  });

  it('deve falhar ao criar uma transação com valor negativo', () => {
    expect(() => {
      new Transaction('Alice', 'Bob', -50, 'assinatura-123');
    }).toThrow();
  });
});
