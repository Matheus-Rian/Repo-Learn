type User = {
  name: string,
  age: number,
}

export class MyDataBaseClassic {
  private static _instance: MyDataBaseClassic | null = null;
  private users: User[] = []

  private constructor() {}
  
  static get instance(): MyDataBaseClassic {
    if (MyDataBaseClassic._instance === null) {
      MyDataBaseClassic._instance = new MyDataBaseClassic();
    }

    return MyDataBaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
    console.log(`O user ${user.name} foi adicionado com sucesso`);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
    console.log(`O user ${this.users[index].name} foi removido com sucesso`);
  }

  show(): void {
    for(const user of this.users) {
      console.log(user);
    }
  }
}
