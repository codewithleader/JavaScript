const elis = {
  name: 'Elis',
  age: 36,
  print() {
    console.log(`Name: ${this.name} - Age: ${this.age}`);
  },
};

const efrain = {
  name: 'Efrain',
  age: 8,
  print() {
    console.log(`Name: ${this.name} - Age: ${this.age}`);
  },
};

// elis.print();
// This must be created with the word "new". Example: const antony = new Person('Antony', 35);
function Person(name, age) {
  console.log('This line was executed');

  this.name = name;
  this.age = age;

  this.print = function () {
    console.log(`Name: ${this.name} - Age: ${this.age}`);
  };
}

// Creating new instances of the "Person" function
const mary = new Person('Mary', 19);
const yami = new Person('Yami', 30);

mary.print();
yami.print();
