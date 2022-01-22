libreria = [
  new libro(
    "libro1",
    "autor1",
    "editorial1",
    "genere1",
    "descrizione1",
    "img1",
    "prezzo1",
    "quantità1"
  ),
  new libro(
    "libro2",
    "autor2",
    "editorial2",
    "genere2",
    "descrizione2",
    "img2",
    "prezzo2",
    "quantità2"
  ),
  new libro(
    "libro3",
    "autor3",
    "editorial3",
    "genere3",
    "descrizione3",
    "img3",
    "prezzo3",
    "quantità3"
  ),
  new libro(
    "libro4",
    "autor4",
    "editorial4",
    "genere4",
    "descrizione4",
    "img4",
    "prezzo4",
    "quantità4"
  ),
];

function libro(
  titulo,
  autor,
  editorial,
  genero,
  descripcion,
  imagen,
  precio,
  cantidad
) {
  this.titulo = titulo;
  this.autor = autor;
  this.editorial = editorial;
  this.genero = genero;
  this.descripcion = descripcion;
  this.imagen = imagen;
  this.precio = precio;
  this.cantidad = cantidad;
}
function insertLibro() {
  for (const libro of libreria) {
    document.getElementById("table").innerHTML += `
        <tr>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.editorial}</td>
            <td>${libro.genero}</td>
            <td>${libro.descripcion}</td>
            <td>${libro.imagen}</td>
            <td>${libro.precio}</td>
            <td>${libro.cantidad}</td>
        </tr>
        `;
  }
}

insertLibro();
