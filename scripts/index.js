// const newTarjetas = require("./newTarjetas");
// const newHeader = require("./newHeader");
import { newTarjetas } from './newTarjetas';
import { newHeader } from './newHeader';

const peliculas = () => {
  $.get('https://api.1rodemayo.com/movies?quantity=28', (objetoPeliculas, status) => {
    newTarjetas(objetoPeliculas);
    newHeader(objetoPeliculas);
  });
};

peliculas();

  // const headerImagen = () => {
  //   $.get('https://webpt19b.web.app/data/movies.json', (objetoPeliculas, status) => {
  //     newHeader(objetoPeliculas);
  //   });
  // };

  // setInterval(headerImagen, 7000);


// https://students-api.2.us-1.fl0.io/movies
// https://webpt19b.web.app/data/movies.json
// https://api.1rodemayo.com/movies?quantity=3
// https://api.1rodemayo.com/movies