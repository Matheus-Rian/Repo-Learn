function updateData(currentObject, newDataObject) {
  Object.keys(currentObject).forEach(key => {
    if (newDataObject.hasOwnProperty(key))
      currentObject[key] = newDataObject[key];
  });

  return currentObject;
}

console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 }));
console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description:
  "camiseta 100% algodão" }));