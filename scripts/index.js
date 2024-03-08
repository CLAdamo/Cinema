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

const imagenHeaderToHtml = (pelicula, index) => {
  // Extrae propiedades del objeto pelicula utilizando destructuring
  const { title, year, director, duration, genre, poster } = pelicula;

  const contenedor = document.createElement("div");
  contenedor.classList.add("carousel-item");
  
  
  if (index === 0) {
    contenedor.classList.add("active");
  }
  
  contenedor.innerHTML = 
  `
  <img class="d-block w-100" src="${poster}" alt="First slide">
  <div class="carousel-caption">
    <img class="d-block w-100" src="${poster}" alt="First slide">
    <h1>${title}</h1>
    <p><strong>Año: </strong>${year}</p>
    <p><strong>Duracion: </strong>${duration}</p>
    <p><strong>Genero: </strong>${genre.join(", ")}</p>
    <p><strong>Director: </strong>${director}</p>
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

  const headerContenedor = document.getElementById('carousel-inner');
  headerContenedor.innerHTML = "";
  
  const imagenHeaderHtml = objetoPeliculas.map(imagenHeaderToHtml);

  // Appendear los elementos HTML al contenedor
  imagenHeaderHtml.forEach(function(elemento) {
    headerContenedor.appendChild(elemento);
});

  // if (i < imagenHeaderHtml.length-1) {
  //   headerContenedor.appendChild(imagenHeaderHtml[i]);
  //   i++;
  // } else {
  //   headerContenedor.appendChild(imagenHeaderHtml[i]);
  //   i = 0;
  // }
  
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
// setInterval(headerImagen, 7000);


// https://students-api.2.us-1.fl0.io/movies

// https://webpt19b.web.app/data/movies.json