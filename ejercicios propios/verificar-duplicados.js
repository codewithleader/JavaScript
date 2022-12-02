// Solucion usando el metodo Set()
const tieneDuplicados = array => {
  const sinDuplicados = new Set(array);
  if (sinDuplicados.size < array.length) {
    return true;
  }

  return false;
};

// console.log(tieneDuplicados([2, 2, 3, 4]));
// console.log(tieneDuplicados([2, 1, 3, 4]));

// Solucion sin metodos:
const tieneDuplicados2 = array => {
  let map = {};

  for (const item of array) {
    if (item in map) {
      map[item] += 1;
    } else {
      map[item] = 1;
    }

    if (map[item] > 1) {
      return true;
    }
  }
  return false;
};

// console.log(tieneDuplicados2([2, 2, 3, 4]));
// console.log(tieneDuplicados2([2, 1, 3, 3]));
// console.log(tieneDuplicados2([2, 1, 3, 5]));
console.log(tieneDuplicados2([1, 2, 3, 4, 1]));
