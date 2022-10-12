var productos = [
  {
    price: 100,
    name: 'tv',
  },
  {
    price: 50,
    name: 'phone',
  },
  {
    price: 30,
    name: 'lamp',
  },
];

function people(array, price) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].price <= price) {
      newArr.push({price: array[i].price});
    }
  }
  return newArr;
}

const res = people(productos, 55);

console.log(res);
