function calculateNumberPassword(passwords) {
  const vector = [];
  let password = '';
  let transform = '';

  passwords.forEach((num) => {
    vector.push(num.split(""));
  });

  for (let lin = 0; lin < 10; lin++) {
    for (let col = 0; col < 10; col++) {
      let zero = 0;
      let one = 0;

      transform += vector[col][lin];

      if (transform.length === 10) {
        const numbers = transform.split("");
        numbers.forEach(n => n === "1" ? one++ : zero++);
        if (one > zero) {
          password += "1";
        } else if (one == zero) {
          password += "1";
        } else {
          password += "0";
        }

        transform = '';
      }
    }
  }

  return parseInt(password, 2)
}

console.log(calculateNumberPassword(["0110100000", "1001011111", "1110001010", "0111010101", "0011100110", "1010011001", "1101100100", "1011010100", "1001100111", "1000011000"]))
