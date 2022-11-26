
// Em Pesquisa Binária é de extrema importância que os valores estejam ordernados.

function searchBinary(list, target) {
  // const arrSorted = list.sort();
  let min = 0;
  let max = list.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const guess = list[middle];

    if (guess === target)
      return middle;
    
    if (guess > target)
      max = middle - 1;
    else
      min = middle + 1;
  }

  return null;
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(searchBinary(arr, 4));
console.log(searchBinary(arr, 6));
