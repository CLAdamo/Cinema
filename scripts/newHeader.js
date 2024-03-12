// const imagenHeaderToHtml = require("./imagenHeaderToHtml");
import { imagenHeaderToHtml } from './imagenHeaderToHtml';

// let i = 0;
const newHeader = (objetoPeliculas) => {

  const headerContenedor = document.getElementById('carousel-inner');
  headerContenedor.innerHTML = "";
  
  const imagenHeaderHtml = objetoPeliculas.map(imagenHeaderToHtml);

  // Appendear los elementos HTML al contenedor
  imagenHeaderHtml.forEach(function(elemento) {
    if (elemento !== null){
      headerContenedor.appendChild(elemento);
    };
  });

  // if (i < imagenHeaderHtml.length-1) {
  //   headerContenedor.appendChild(imagenHeaderHtml[i]);
  //   i++;
  // } else {
  //   headerContenedor.appendChild(imagenHeaderHtml[i]);
  //   i = 0;
  // }
  
  };

export {newHeader};
// module.exports = {newHeader};