class Singleton {
  // Static properties
  static instance; // undefined

  name = '';

  // Define parameters in the constructor
  constructor(name = '') {
    const a = undefined; // Si a = undefined return undefined;
    console.log(a); // undefined
    console.log(!a); // Con un !a return true;
    console.log(!!a); // Con doble !!a return false;

    // Se usa este truquito del !! para evaluar en boolean en vez de undefined. 😎
    if (!!Singleton.instance) {
      return Singleton.instance; // Si la instancia ya existe retorna la misma instancia
    }

    // Si no existe entonces si crea una nueva instancia.
    Singleton.instance = this;
    this.name = name;

    // return this; // opcional: Es igual porque el constructor de una clase siempre return el this
  }
}

const instance1 = new Singleton('Ironman');
const instance2 = new Singleton('Spiderman');
// const instance3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia 1 es: ${instance1.name}`);
console.log(`Nombre en la instancia 2 es: ${instance2.name}`);
// console.log(`Nombre en la instancia 3 es: ${instance3.name}`);
