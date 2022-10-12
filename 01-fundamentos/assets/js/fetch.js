// Escribe una función que haga una petición a un endpoint que retorna un objeto, y retorne la fecha formateada como string.

const url = 'https://www.cotalker.com/api/messages/ping';

const data = fetch(url)
  .then(data => {
    return data.json();
  })
  .catch(error => {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });

  console.log({data});
// async function currentTime() {
//   const time = await fetch(url).then(res => res.json()).then(({time}) => time);
//   console.log(`🚀 time`, time);

//   const date = new Date(time);

//   const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

//   return console.log(date.toLocaleDateString('en-us', options));
// };

// currentTime();
//Friday, Jul 2, 2021
// function currentTime() {
//   const data = fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then(res => res.json())
//     .then(({ time }) => console.log('Current Time:', new Date(time)))
//     .catch(console.error);
// }
