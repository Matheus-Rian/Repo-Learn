function countList(numbers) {
  if (numbers.length === 0) 
    return 0;
  return 1 + countList(numbers.slice(1));
}

console.log(countList([1, 2, 3, 6]));