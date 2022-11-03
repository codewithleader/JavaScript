class Person {
  // Property initialization (Optional: Can be defined in the constructor):
  name = '';
  cod = '';
  quote = '';

  // Define parameters in the constructor
  constructor(name = 'No name', cod = 'No cod', quote = 'No quote') {
    this.name = name;
    this.cod = cod;
    this.quote = quote;
  }
}

const spiderman = new Person(
  'Peter Parker',
  'Spiderman',
  'Remember, with great power comes great responsibility.'
);
console.log(spiderman); // Print an object of class Person with the constructor properties

const ironman = new Person('Tony Stark', 'Ironman', 'I’m Ironman');
console.log(ironman); // Print an object of class Person with the constructor properties
