import { Transaction } from './Transaction';
import bcrypt from 'bcrypt';

export class Block {
  public hash: string;
  
  constructor(
    public previousHash: string, 
    public transactions: Transaction[], 
    public timestamp: number = Date.now()
  ) {
    const blockData = `${previousHash}${JSON.stringify(transactions)}${timestamp}`;
    this.hash = bcrypt.hashSync(blockData, 10);
  }
}
