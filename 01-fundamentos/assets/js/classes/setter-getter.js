class User {
  name = '';

  constructor(name) {
    this.name = name
  }

  set setName(newName) {
    this.name = newName;
  }

  get getName() {
    return this.name;
  }
}

// New instance: Nombre inicial 'Elis', despues cambiado a 'Antonio' con la propiedad setName.
const user = new User('Elis');

user.setName = 'Antonio'; // Para usar el metodo set asignando un nuevo valor del user.

console.log('Get user’s name:', user.getName); // Para llamar al metodo get.

console.log(user);
