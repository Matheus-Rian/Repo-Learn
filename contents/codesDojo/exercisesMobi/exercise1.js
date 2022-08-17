function maskify(value) {
  const transformValueIntoArray = value.split('');

  if (transformValueIntoArray.length < 4) {
    return transformValueIntoArray.join('');
  }

  const arrayChangetoHastag = transformValueIntoArray.slice(0, (transformValueIntoArray.length - 4));

  const arrayKeepValues = transformValueIntoArray.slice((transformValueIntoArray.length - 4), transformValueIntoArray.length);
  const maskedValue = arrayChangetoHastag.map(el => el = '#');

  const arrConcat = maskedValue.concat(arrayKeepValues);
  return arrConcat.join('');
}

console.log(maskify("Nanananananananananana Batman!"));
console.log(maskify("Skippy"));
console.log(maskify(""));
console.log(maskify("12345"));
