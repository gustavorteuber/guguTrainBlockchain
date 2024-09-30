import { z } from 'zod';

export const TransactionSchema = z.object({
  sender: z.string(),
  receiver: z.string(),
  amount: z.number().positive(),
  signature: z.string(),
});

export type ITransaction = z.infer<typeof TransactionSchema>;

export class Transaction {
  constructor(public sender: string, public receiver: string, public amount: number, public signature: string) {
    TransactionSchema.parse(this); 
  }
}
