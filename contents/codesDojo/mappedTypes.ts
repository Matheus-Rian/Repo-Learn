interface Person {
  name: string;
  age: number;
}

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]:
    () => T[K];
}

type LazyPerson = Getters<Person>;

const user: LazyPerson = {
  getName: () => 'Matheus',
  getAge: () => 19,
};

type User = {
  name: string;
  password: string;
};

type setUser = setters<User>;

type setters<T> = {
  [Property in keyof T as `set${Capitalize<string & Property>}`]: () => T[Property];
};

const dataUser: User = {
  name: 'Matheus',
  password: '1234'
}

const updateUser: setUser = {
  setName: () => dataUser.name,
  setPassword: () => dataUser.password
}

const userName = updateUser.setName(); // Matheus
const userPassword = updateUser.setPassword(); // 1234
