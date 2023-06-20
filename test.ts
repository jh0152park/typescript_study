// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}

//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Player extends User {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   sayHi(name: string): string {
//     return `Hello ${name}! ${this.firstName} ${this.lastName}`;
//   }
// }

interface User {
  firstName: string;
  lastName: string;

  sayHi(name: string): string;
  fullName(): string;
}

class Player implements User {
  constructor(public firstName: string, public lastName: string) {}

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(name: string): string {
    return `Hello ${name}! ${this.firstName} ${this.lastName}`;
  }
}
