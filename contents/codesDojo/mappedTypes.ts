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
