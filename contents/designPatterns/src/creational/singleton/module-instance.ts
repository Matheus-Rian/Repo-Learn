import { MyDataBaseClassic } from "./db/my-database-classic";

const myDataBaseClassic = MyDataBaseClassic.instance;
myDataBaseClassic.add({ name: 'Matheus', age: 19 });