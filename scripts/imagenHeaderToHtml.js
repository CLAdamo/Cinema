const imagenHeaderToHtml = (pelicula, index) => {
  // Extrae propiedades del objeto pelicula utilizando destructuring
  const { title, year, director, duration, genre, poster, rate } = pelicula;
  
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
    <span>${year}</span>
    <p>${genre.join(", ")}</p>
  </div>
  `
  return contenedor;
};

export {imagenHeaderToHtml};
// module.exports = {imagenHeaderToHtml};