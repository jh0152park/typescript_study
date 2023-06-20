type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.food] === undefined) {
      this.words[word.food] = word.comment;
    }
  }

  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public readonly food: string, public readonly comment: string) {}
}

const kimchi = new Word("kimchi", "food of korea");
const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");
