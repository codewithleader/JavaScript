// Definir una función para determinar si un número dado es primo.

// 5 => 5, 1
// 6 => 1, 2, 3, 6
// 7 => 1, 7

function isPrime(numero) {
  // Validations

  // Comprueba si es un numero:
  if (typeof numero != 'number') {
    throw TypeError('The argument must be a number.');
  }

  // Comprueba si es un numero entero:
  if (!Number.isInteger(numero)) {
    throw TypeError('The argument must be an integer.');
  }

  // Comprueba si es un numero positivo mayor a cero.
  if (numero <= 1) {
    throw Error('The argument must be a positive integer.');
  }

  // Raiz cuadrada del numero redondeada a entero + 1.
  let raiz = Math.floor(Math.sqrt(numero)) + 1;
  console.log(`🚀 raiz`, raiz);

  let raiz2 = Math.floor(Math.sqrt(numero));
  console.log(`🚀 raiz2`, raiz2);

  let raiz3 = Math.sqrt(numero);
  console.log(`🚀 raiz3`, raiz3);

  for (let i = 2; i < raiz; ++i) {
    if (numero % i == 0) {
      return false;
    }
  }

  return true;
}

try {
  console.log(isPrime(5)); // true
} catch (e) {
  console.log(`Error: ${e.message}`);
}

console.log();

try {
  console.log(isPrime(6)); // false
} catch (e) {
  console.log(`Error: ${e.message}`);
}

console.log();

try {
  console.log(isPrime(3)); // true
} catch (e) {
  console.log(`Error: ${e.message}`);
}

console.log();

try {
  console.log(isPrime(1.7)); // Error
} catch (e) {
  console.log(`Error: ${e.message}`);
}

console.log();

try {
  console.log(isPrime(-1)); // Error
} catch (e) {
  console.log(`Error: ${e.message}`);
}

console.log();

try {
  console.log(isPrime('1')); // Error
} catch (e) {
  console.log(`Error: ${e.message}`);
}

function primeNumbers(number) {
  for (let x = 2; x <= number; x++) {
    if (isPrime(x)) {
      console.log(`The number ${x} is a prime number`);
    } else {
      console.log(`The number ${x} is not a prime number`);
    }
  }
}

primeNumbers(10);