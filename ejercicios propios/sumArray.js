// Enunciado: Dada la siguiente problemática: ¿puede un número X formarse usando la suma de 2 elementos de un array?
// Ejemplo 1
// Input: nums = [1,4,3,9], requiredSum = 8
// Output: False
// Ejemplo 2
// Input: nums = [1,2,4,4], requiredSum = 8
// Output: True

function sumArray(arr, n) {
  for (let i = 0; i < arr.length - 1; i++) {
    // i = 0, 1, 2
    for (let j = i + 1; j < arr.length; j++) {
      // j = 1, 2, 3
      let sum = arr[i] + arr[j];
      console.log(`${arr[i]} + ${arr[j]} =`, sum);
      if (sum === n) {
        return true;
      }
    }
  }
  return false;
}

console.log(sumArray([1, 4, 3, 9], 8));
console.log(sumArray([1, 2, 4, 4], 8));
