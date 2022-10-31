const products = [
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

for (const product of products) {
  console.log(product.name);
}

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn('For in');
for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn('For of');
for (let heroe of heroes) {
  console.log(heroe);
}
