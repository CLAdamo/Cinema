const peliculaToHtml = ({ title, year, director, duration, genre, rate, poster }) => {
  
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

export {peliculaToHtml};
// module.exports = {peliculaToHtml};