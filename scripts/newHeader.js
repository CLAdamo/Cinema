// const imagenHeaderToHtml = require("./imagenHeaderToHtml");
import { imagenHeaderToHtml } from './imagenHeaderToHtml';

// let i = 0;
const newHeader = (objetoPeliculas) => {

  const headerContenedor = document.getElementById('carousel-inner');
  headerContenedor.innerHTML = "";

  // Ordenar los objetos por el valor de la propiedad "rate"
  objetoPeliculas.sort((a, b) => b.rate - a.rate);
  
  const imagenHeaderHtml = objetoPeliculas.map(imagenHeaderToHtml);

  // Appendear los elementos HTML al contenedor
  for (let i = 0; i < 5; i++) {
    headerContenedor.appendChild(imagenHeaderHtml[i]);
  };
  console.log(headerContenedor);

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
