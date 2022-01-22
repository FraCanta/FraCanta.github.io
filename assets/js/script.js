libreria = [
  new libro(
    "libro1",
    "autor1",
    "editorial1",
    "genere1",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "prezzo1",
    "quantità1"
  ),
  new libro(
    "libro2",
    "autor2",
    "editorial2",
    "genere2",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "prezzo2",
    "quantità2"
  ),
  new libro(
    "libro3",
    "autor3",
    "editorial3",
    "genere3",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1598618253208-d75408cee680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "prezzo3",
    "quantità3"
  ),
  new libro(
    "libro4",
    "autor4",
    "editorial4",
    "genere4",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
    "prezzo4",
    "quantità4"
  ),
  new libro(
    "libro5",
    "autor5",
    "editorial5",
    "genere5",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
    "https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
    "prezzo4",
    "quantità4"
  ),
  new libro(
    "libro6",
    "autor6",
    "editorial6",
    "genere6",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit in hic veritatis?",
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
    <p class="card-text">${libro.descripcion}</p>
    
    <button type="button" class="btn btn-primary"
    onclick="mostraModal()">
    Dettagli</button>
    <div class="modal" id="modal">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <button type="button" class="btn btn-primary close" data-dismiss="modal" onclick="chiudiModal()">&times;</button>
    </div>
    <div class="modal-body">
    <img src="${libro.imagen}" class="card-img-top" alt="..." widt= "100%" height = "100%">
    <p class="card-text">${libro.descripcion}</p>
    </div>

</div>
    <div class="card-footer">
    <small class="text-muted">${libro.autor}</small>
    </div>
    </div>
        `;
  }
}

insertLibro();


// modal dettagli di ogni libro

function mostraModal() {
  document.getElementById("modal").style.display = "block";
}

// chiudi modal
function chiudiModal() {
  document.getElementById("modal").style.display = "none";
}



function cercaLibri() {
  let cerca = document.getElementById("cerca").value;
  let libri = document.getElementsByClassName("card");
  for (let i = 0; i < libri.length; i++) {
    if (libri[i].innerHTML.includes(cerca)) {
      libri[i].style.display = "flex";
      libri[i].style.height = "100%";
    } else {
      libri[i].style.display = "none";
    }
  }
  // dopo aver cercato pulisco il campo di ricerca
  document.getElementById("cerca").value = "";

  }
