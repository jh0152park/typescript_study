import crypto from "crypto";

interface BlackShape {
  hash: string;
  prev: string;
  height: number;
  data: string;
}

class Block implements BlackShape {
  public hash: string;
  constructor(public prev: string, public height: number, public data: string) {
    this.hash = Block.calculateHash(prev, height, data);
  }

  static calculateHash(prev: string, height: number, data: string) {
    const toHash = `${prev}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blackchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    const block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(block);
  }

  public getBlock() {
    return [...this.blocks];
  }
}

const blockchain = new Blackchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlock());
