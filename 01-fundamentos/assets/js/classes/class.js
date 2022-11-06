class Person {
  // Static Properties
  static _count = 0;

  // Se puede usar el get count desde la misma clase, no desde una instancia (Person.count)
  static get count() {
    return Person._count + ' instances';
  }

  // Static Methods
  static message() {
    console.log(this.name); // undefined
    console.log('Hello everyone, i’m static method');
  }

  // Property initialization (Optional: Can be defined in the constructor):
  name = '';
  nickname = '';
  quote = '';
  food = '';

  // Define parameters in the constructor
  constructor(name = 'No name', nickname = 'No nickname', quote = 'No quote') {
    this.name = name;
    this.nickname = nickname;
    this.quote = quote;

    // Increment the static property "_count" for each instance created
    Person._count++;
  }

  // Setters and Getters
  set setFavoriteFood(food) {
    this.food = food.toUpperCase();
  }

  get getFavoriteFood() {
    return `${this.nickname}’s favorite food is ${this.food}`;
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
    this.whoIam();

    // Imprime la Quote:
    console.log(`${this.nickname} say: ${this.quote}`);
  }
}

// New instance spiderman
const spiderman = new Person(
  'Peter Parker',
  'Spiderman',
  'Remember, with great power comes great responsibility.'
);

// console.log(spiderman); // Print an object of class Person with the constructor properties
// spiderman.myQuote(); // Call method myQuote

// Call set
spiderman.setFavoriteFood = 'Aunt May pie';
console.log(spiderman);

// Call get
console.log(spiderman.getFavoriteFood);

/** ******
 * Static
 *********/

// Call Static property
console.log(Person.count);

// Call Static Methods
console.log(Person.message());

// You can also create static properties and methods outside the Class
Person.externalProperty = 'I’m a external property of Person class';
