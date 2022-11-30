import { MyDataStructure } from "./my-data-structure";
import { MyReverseIterator } from "./my-reverse-iterator";

const myDataStructure = new MyDataStructure();
myDataStructure.addItems('a', 'b', 'c', 'd', 'e', 'f');

const [a, b] = myDataStructure;
console.log('ROUBADOS', a, b);
// Consigo parar meu iterator e voltar de onde eu parei!
const [c, ...rest] = myDataStructure;
console.log('ROUBADOS 2', c, rest);

myDataStructure.resetIterator();
for (const data of myDataStructure) console.log(data);

console.log();
myDataStructure.changeIterator(new MyReverseIterator(myDataStructure));

for (const data of myDataStructure) console.log(data);

console.log('Aqui preciso resetar o iterator');
myDataStructure.resetIterator();
for (const data of myDataStructure) console.log(data);