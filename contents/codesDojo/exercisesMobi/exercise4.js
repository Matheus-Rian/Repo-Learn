function checkIfTheFirstLetterIsUppercase(word) {
  const isUpperCase = word[0] === word[0].toUpperCase() ? true : false;
  return isUpperCase;
}

console.log(checkIfTheFirstLetterIsUppercase("Brasil"));
console.log(checkIfTheFirstLetterIsUppercase("xXx"));