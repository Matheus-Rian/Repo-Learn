function simpleArraySum(ar) {
  const total = ar.reduce((prevValue, current) => {
      return prevValue + current;
  }, 0);
  
  return total;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))