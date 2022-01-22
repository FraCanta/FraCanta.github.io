libreria = [
  new libro(
    "libro1",
    "autor1",
    "editorial1",
    "genere1",
    "descrizione1",
    "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "prezzo1",
    "quantità1"
  ),
  new libro(
    "libro2",
    "autor2",
    "editorial2",
    "genere2",
    "descrizione2",
    "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "prezzo2",
    "quantità2"
  ),
  new libro(
    "libro3",
    "autor3",
    "editorial3",
    "genere3",
    "descrizione3",
    "https://images.unsplash.com/photo-1598618253208-d75408cee680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "prezzo3",
    "quantità3"
  ),
  new libro(
    "libro4",
    "autor4",
    "editorial4",
    "genere4",
    "descrizione4",
    "https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
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
    document.getElementById("cards").innerHTML += `
    <div class="card">
    <img src="${libro.imagen}" class="card-img-top" alt="..." widt= "100%" height = "100%">
    <div class="card-body">
    <h5 class="card-title">${libro.titulo}</h5>
    
    </div>
    </div>
        `;
  }
}

insertLibro();


function cercaLibro() {
  // search libro
  var search = document.getElementById("cerca").value;
  console.log(search);
  var libro = libreria.filter(function (libro) {
    if(filter == libro.titulo){
      return libro.titulo;
    }
  });
}




