class Person {
  // Static Method: Como si fuera un segundo constructor. (truquito)
  static personByObject({ name, lastname, country }) {
    return new Person(name, lastname, country);
  }

  // Define parameters in the constructor
  constructor(name, lastname, country) {
    this.name = name;
    this.lastname = lastname;
    this.country = country;

    this.print();
  }

  // Normal Methods
  print() {
    console.log(`name: ${this.name} - lastname: ${this.lastname} - Country: ${this.country}`);
  }
}

// Para el primer constructor:
const name1 = 'Darianny';
const lastname1 = 'Perez';
const country1 = 'Israel';

// Objeto para el segundo constructor (del truquito)
const efrain = {
  name: 'Efrain',
  lastname: 'Perez',
  country: 'Israel',
};

const person1 = new Person(name1, lastname1, country1); // Usa el constructor normal.
const person2 = Person.personByObject(efrain); // Usa el constructor del truquito.

console.log(person1); // Darianny
console.log(person2); // Efrain