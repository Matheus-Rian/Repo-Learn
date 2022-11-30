function sum(numbers) {
  if (numbers.length === 1)
    return numbers[0];

  const currentNumber = numbers.pop();
  return currentNumber + sum(numbers);
}

console.log(sum([1, 2, 3, 6]));

// Other Solution

function sumRecursive(arr) {
  if (arr.length == 0) return 0;
  return arr[0] + sumRecursive(arr.slice(1));
}

console.log(sumRecursive([1, 2, 3, 4])); // 10