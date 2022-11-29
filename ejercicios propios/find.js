const people = [
  {
    name: 'Jose',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },

  {
    name: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Python',
  },

  {
    name: 'Matias',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure',
  },
];

// function getFirstPython(array) {
//   return array.find(x => x.language === 'Fulanito') || 'Mensaje alternativo si Fulanito no está';
// }

function getFirstPython(array) {
  return (
    array.find(function (x) {
      return x.language === 'Fulanito';
    }) || 'Mensaje alternativo si Fulanito no está'
  );
}

console.log(getFirstPython(people));
