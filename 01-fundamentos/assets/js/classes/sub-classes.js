class Person {
  // Static Properties
  static _count = 0;
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
      console.log('Function Hello creada desde el mismo scope de whoIam');
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

// Sub Class Hero
class Hero extends Person {
  // Static properties

  // Static Methods

  // Property initialization (Optional: Can be defined in the constructor):
  clan = 'Sin Clan';

  // Define parameters in the constructor
  constructor(name, nickname, quote) {
    super(name, nickname, quote); // Importante: Antes de usar algun "this." en el constructor, se debe llamar al "super".
    this.clan = 'The Avengers';
  }

  // Overriding the whoIam method and calling the parent class's whoIam method inside with "super.whoIam();"
  whoIam() {
    console.log('Message sub-class Hero');

    // Call Parent method with super
    super.whoIam();
  }
}
// New instance spiderman
const spiderman = new Hero(
  'Peter Parker',
  'Spiderman',
  'Remember, with great power comes great responsibility.'
);

console.log(spiderman);
spiderman.whoIam();
