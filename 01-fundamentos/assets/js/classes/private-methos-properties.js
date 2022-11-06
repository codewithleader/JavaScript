class Rectangulo {
  #area = 0; // Propiedad privada: solo puede ser usada en el constructor.

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;

    this.#duplicarArea(); // Llamada al metodo privado.
  }

  // Metodos privados (Solo pueden ser llamador desde el constructor)
  #duplicarArea() {
    console.log('Area duplicada:', this.#area * 2);
  }
}

const rectangulo = new Rectangulo(10, 15);
console.log(rectangulo);
