import { Block } from './Block';
import { Transaction } from './Transaction';
import bcrypt from 'bcrypt'

export class Blockchain {
  public chain: Block[];

  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  private createGenesisBlock(): Block {
    return new Block('0', [], Date.now()); // Bloco inicial com hash '0'
  }

  public getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  public addBlock(transactions: Transaction[]): void {
    const latestBlock = this.getLatestBlock();
    const newBlock = new Block(latestBlock.hash, transactions);
    this.chain.push(newBlock);
  }

  public isValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== bcrypt.hashSync(`${previousBlock.hash}${JSON.stringify(currentBlock.transactions)}${currentBlock.timestamp}`, 10)) {
        return false;
      }
    }
    return true;
  }
}
