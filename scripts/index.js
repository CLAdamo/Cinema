// const { tempData } = require('./tempData');

// import { tempData } from './tempData.js';

// const nombreYpuntuacion = document.createElement("div");
  // nombreYpuntuacion.classList.add("nombre_rate");

  // const nuevoTitulo = document.createElement("h3");
  // nuevoTitulo.innerHTML = title;

  // const contenedorPuntuacion = document.createElement('div');
  // contenedorPuntuacion.classList.add("rate");

  // const puntuacion = document.createElement("span");
  // puntuacion.innerHTML = rate;

  // const elementosTarjeta = document.createElement("div");
  // elementosTarjeta.classList.add("elementos_tarjeta");

  // const estreno = document.createElement("h3");
  // estreno.classList.add("estreno");
  // estreno.innerHTML = year;

  // const itemDuracion = document.createElement("strong");
  // itemDuracion.innerHTML = "Duracion: ";

  // const duracion = document.createElement("p");
  // duracion.innerHTML = duration;

  // const itemGenero = document.createElement("strong");
  // itemGenero.innerHTML = "Genero: ";
  
  // const genero = document.createElement("p");
  // genero.innerHTML = genre;

  
  // const itemDireccion = document.createElement("strong");
  // itemDireccion.innerHTML = "Director: ";
  
  // const direccion = document.createElement("p");
  // direccion.innerHTML = director;
  
  
  // const itemImagen = document.createElement("a");
  // itemImagen.href = "";
  
  // const imagen = document.createElement("img");
  // imagen.classList.add("imagenes");
  // imagen.src = poster;

  // contenedorPuntuacion.appendChild(puntuacion);
  
  // nombreYpuntuacion.appendChild(nuevoTitulo);
  // nombreYpuntuacion.appendChild(contenedorPuntuacion);
  
  // duracion.appendChild(itemDuracion);
  // genero.appendChild(itemGenero);
  // direccion.appendChild(itemDireccion)
  
  // elementosTarjeta.appendChild(estreno);
  // elementosTarjeta.appendChild(duracion);
  // elementosTarjeta.appendChild(genero);
  // elementosTarjeta.appendChild(direccion);

  // itemImagen.appendChild(imagen);
  
  // nuevaTarjeta.appendChild(nombreYpuntuacion);
  // nuevaTarjeta.appendChild(elementosTarjeta);
  // nuevaTarjeta.appendChild(itemImagen);

// <div class="tarjetas">
//   <div class="nombre_rate">
//     <h3>Guardians of the Galaxy Vol. 2</h3>
//     <div class="rate">
//       <span>7.7</span>
//     </div>
//   </div>
//   <div class="elementos_tarjeta">
//     <h3 class="estreno">2017</h3>
//     <p><strong>Duracion: </strong>2h 16min</p>
//     <p><strong>Genero: </strong>  Action, Adventure, Comedy</p>
//     <p><strong>Director: </strong>James Gunn</p>
//   </div>
//   <a href=""><img class="imagenes" src="" alt=""></a>
// </div>

// console.log(tempData);



const peliculaToHtml = ({ title, year, director, duration, genre, rate, poster }) => {
  // Extrae propiedades del objeto pelicula utilizando destructuring
  // const { title, year, director, duration, genre, rate, poster } = pelicula;
  
  // creo los nuevos elementos HTML
  const nuevaTarjeta = document.createElement("div");
  nuevaTarjeta.classList.add("tarjetas");

  nuevaTarjeta.innerHTML = `
    <div class="nombre_rate">
      <h3>${title}</h3>
      <div class="rate">
        <span>${rate}</span>
      </div>
    </div>
    <div class="elementos_tarjeta">
      <h3 class="estreno">${year}</h3>
      <p><strong>Duracion: </strong>${duration}</p>
      <p><strong>Genero: </strong>${genre.join(", ")}</p>
      <p><strong>Director: </strong>${director}</p>
    </div>
    <a href="#"><img class="imagenes" src="${poster}" alt="${title}"></a>
  `;

  return nuevaTarjeta;
};

        
        
/*<div id="imagenFondo_header" class="tarjeta_header" style="background-image: url()"></div> 
  <div class="nombre_header">
    <h3>Guardians of the Galaxy Vol. 2</h3>
    <h3 class="estreno">2017</h3>
    <p><strong>Duracion: </strong>2h 16min</p>
    <p><strong>Genero: </strong>  Action, Adventure, Comedy</p>
    <p><strong>Director: </strong>James Gunn</p>
  </div> 
</div>*/



const imagenHeaderToHtml = (pelicula) => {
  // Extrae propiedades del objeto pelicula utilizando destructuring
  const { title, year, director, duration, genre, rate, poster } = pelicula;
  
  const contenedor = document.createElement("div");
  
  contenedor.innerHTML = 
  `
  <div class="tarjeta_header" style="background-image: url(${poster})">
    <div class="nombre_header">
      <h3>${title}</h3>
      <h2 class="estreno">${year}</h2>
      <div class="elementos_tarjeta_header">
        <p><strong>Duracion: </strong>${duration}</p>
        <p><strong>Genero: </strong>${genre.join(", ")}</p>
        <p><strong>Director: </strong>${director}</p>
      </div>
    </div>
  </div>
  
  `

  return contenedor;
};

const newTarjetas = (objetoPeliculas) => {
  
const contenedorPeliculas = document.getElementById("contenedorPeliculas");
contenedorPeliculas.innerHTML = "";


const peliculasHTML = objetoPeliculas.map(peliculaToHtml);
  
// Appendear los elementos HTML al contenedor
peliculasHTML.forEach(function(elemento) {
  contenedorPeliculas.appendChild(elemento);
});
};

let i = 0;
const newHeader = (objetoPeliculas) => {

  const headerContenedor = document.getElementById('imagenFondo_header');
  headerContenedor.innerHTML = "";
  const imagenHeaderHtml = objetoPeliculas.map(imagenHeaderToHtml);
  
  if (i < imagenHeaderHtml.length-1) {
    headerContenedor.appendChild(imagenHeaderHtml[i]);
    i++;
  } else {
    headerContenedor.appendChild(imagenHeaderHtml[i]);
    i = 0;
  }
  
  };

const peliculas = () => {
  $.get('https://webpt19b.web.app/data/movies.json', (objetoPeliculas, status) => {
    newTarjetas(objetoPeliculas);
    newHeader(objetoPeliculas);
  });
};

const headerImagen = () => {
  $.get('https://webpt19b.web.app/data/movies.json', (objetoPeliculas, status) => {
    newHeader(objetoPeliculas);
    
  });
};

peliculas();
setInterval(headerImagen, 5000);


// https://students-api.2.us-1.fl0.io/movies



