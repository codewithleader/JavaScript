// Para hacer paginación en JavaScript, necesitarás dividir los datos que quieres mostrar en páginas individuales y luego crear botones de navegación para que el usuario pueda moverse entre ellas. Aquí hay un ejemplo de cómo podrías hacerlo:

// #1 Dividir los datos en páginas:
const itemsPerPage = 10; // mostrar 10 elementos por página

let currentPage = 1; // página actual
let pages = []; // arreglo para almacenar las páginas

for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
}

// #2 Mostrar los datos de la página actual:
function showPage(page) {
  // ocultar todos los elementos
  items.forEach(item => item.style.display = 'none');

  // mostrar solo los elementos de la página actual
  pages[page - 1].forEach(item => item.style.display = 'block');
}

// mostrar la página inicial
showPage(currentPage);

// #3 Crear botones de navegación:
function createPaginationButtons() {
  const pagination = document.createElement('div');
  pagination.classList.add('pagination');

  // crear un botón por cada página
  for (let i = 1; i <= pages.length; i++) {
      const button = document.createElement('button');
      button.textContent = i;

      // si es la página actual, agregar la clase 'active'
      if (i === currentPage) {
          button.classList.add('active');
      }

      // agregar evento click a cada botón
      button.addEventListener('click', () => {
          currentPage = i;
          showPage(currentPage);
          createPaginationButtons();
      });

      pagination.appendChild(button);
  }

  // agregar los botones a la página
  document.body.appendChild(pagination);
}

createPaginationButtons();

// Con este código, se mostrarán los elementos en páginas de 10 en 10 y se crearán botones de navegación para moverse entre ellas. ¡Espero que esto te ayude!