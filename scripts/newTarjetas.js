// const peliculaToHtml = require("./peliculaToHTML");
import { peliculaToHtml } from './peliculaToHTML';

const newTarjetas = (objetoPeliculas) => {
  
  const contenedorPeliculas = document.getElementById("contenedorPeliculas");
  contenedorPeliculas.innerHTML = "";

  const peliculasHTML = objetoPeliculas.map(peliculaToHtml);
    
  // Appendear los elementos HTML al contenedor
  peliculasHTML.forEach(function(elemento) {
    contenedorPeliculas.appendChild(elemento);
  });
};

export {newTarjetas};
// module.exports = {newTarjetas};