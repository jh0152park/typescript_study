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
