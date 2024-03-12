// const peliculaToHtml = require("./peliculaToHTML");
import { peliculaToHtml } from './peliculaToHTML';

const newTarjetas = (objetoPeliculas) => {
  
  const contenedorPeliculas = document.getElementById("contenedorPeliculas");
  contenedorPeliculas.innerHTML = "";

  // Ordenar los objetos por el valor de la propiedad "year"
  objetoPeliculas.sort((a, b) => b.year - a.year);

  const peliculasHTML = objetoPeliculas.map(peliculaToHtml);
    
  // Appendear los elementos HTML al contenedor
  peliculasHTML.forEach(function(elemento) {
    contenedorPeliculas.appendChild(elemento);
  });
};

export {newTarjetas};
// module.exports = {newTarjetas};
