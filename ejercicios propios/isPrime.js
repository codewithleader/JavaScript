// Son primos los numeros naturales mayores a 1 que son divisibles por si mismos y por 1.

// Funcion booleana que indica si es un numero primo o no:
function isPrime(number) {
  for (let i = 2; i <= number - 1; i++) {
    // Con el operador resto (%) devuelve el resto de la división:
    if (number % i === 0) return false;
  }
  return true;
}

// Funcion que imprime todos los numeros que sean primos
function primeNumbers(number) {
  // Se empieza a iterar desde 2 porque 0 y 1 no son numeros primos.
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      console.log(`${i} is a prime number`);
    }
  }
}

primeNumbers(10);

/** Result:
 * 2 is a prime number
 * 3 is a prime number
 * 5 is a prime number
 * 7 is a prime number
 */
