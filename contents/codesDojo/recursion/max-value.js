function max(arr) {
  if (arr.length === 2) 
    return arr[0] > arr[1] ? arr[0] : arr[1];
  
  let sub_max = max(arr.slice(1));
  
  return arr[0] > sub_max ? arr[0] : sub_max;
}

function alternativeSolutionMax(array, max = 0) {
  return array.length === 0
    ? max
    : alternativeSolutionMax(array.slice(1), array[0] > max ? array[0] : max);
}

console.log(max([1, 5, 10, 25, 16, 1])); // 25
console.log(alternativeSolutionMax([1, 5, 10, 25, 16, 1])); // 25