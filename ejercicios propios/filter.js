var products = [
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

// function productsFilterByLowPrice(products, price) {
//   const newArrayOfProducts = products.filter(product => {
//     return product.price <= price
//   })

//   return console.log(newArrayOfProducts);
// }

function productsFilterByLowPrice(array, price) {
  let newArray = []
  const priceArray = array.filter(p => {
    if (p.price <= price) {
      newArray.push({price: p.price})
    }
  });
  return console.log(priceArray);
}

productsFilterByLowPrice(products, 55);
