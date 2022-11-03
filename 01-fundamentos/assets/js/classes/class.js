class Person {
  // Property initialization (Optional: Can be defined in the constructor):
  name = '';
  nickname = '';
  quote = '';

  // Define parameters in the constructor
  constructor(name = 'No name', nickname = 'No nickname', quote = 'No quote') {
    this.name = name;
    this.nickname = nickname;
    this.quote = quote;
  }

  // Methods
  whoIam() {
    console.log(`I’m ${this.name} and my Nickname is ${this.nickname}`);

    // Funciones creadas en este mismo scope:
    function hello() {
      console.log('Function Hello :-)');
    }
    // Para llamarla desde este mismo scope es así:
    hello();
  }

  myQuote() {
    // Para invocar funciones fuera de este scope pero están dentro de la clase es así:
    this.whoIam()

    // Imprime la Quote:
    console.log(`${this.nickname} say: ${this.quote}`);
  }
}

const spiderman = new Person(
  'Peter Parker',
  'Spiderman',
  'Remember, with great power comes great responsibility.'
);
console.log(spiderman); // Print an object of class Person with the constructor properties
spiderman.myQuote(); // Call method myQuote

const ironman = new Person('Tony Stark', 'Ironman', 'I’m Ironman');
console.log(ironman); // Print an object of class Person with the constructor properties

ironman.myQuote();
