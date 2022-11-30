function sum(numbers) {
  if (numbers.length === 1)
    return numbers[0];

  const currentNumber = numbers.pop();
  return currentNumber + sum(numbers);
}

console.log(sum([1, 2, 3, 6]));