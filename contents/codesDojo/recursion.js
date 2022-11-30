function fatorial(n) {
  if (n === 1) 
    return 1;

  return n * fatorial(n - 1);
}

console.log(fatorial(5));

// CallStack

// Fatorial (1)
// Fatorial (2)
// Fatorial (3)
// Fatorial (4)
// Fatorial (5)