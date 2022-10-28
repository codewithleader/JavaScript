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

function productsFilterByLowPrice(products, price) {
  const priceArray = products.filter(p => p.price <= price).map(p => ({price: p.price}));

  return console.log(priceArray);
}

productsFilterByLowPrice(products, 55);
