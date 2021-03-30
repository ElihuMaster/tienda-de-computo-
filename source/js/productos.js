    //Lista de productos

const ProductoComponente = (data) => {//aqui se costruye el componete producto 
  return `<div>
        <div class="search">
        <ul>
            <li><a href="./muestraProducto.html?codigo=${data.codigo}">Code-${data.codigo} / ${data.nombre}</a></li>
            <li>computer</li>
            <li>s/${data.precioDescontado}</li> 
            <li>${data.descripcion} </li>
        </ul>
        <div class="search-buttons">
        <button id="descontar-${data.codigo}">Descuento</button>
            <button id="producto-${data.codigo}">Comprar</button>
        </div>
        <div id="rating">
        <p>Rating * * * * *</p><span>Stock:${" "+data.stock}</span>
        </div>
        </div>
        <div class="container-img">
            <img src="${data.imagen}">
        </div>
    </div>
    `;//esto es un template string
};

const ElementoContenedorProductos = document.getElementById(
  "grupo-de-productos"
);

const llenarData = () => {
    ElementoContenedorProductos.innerHTML = ""// aqui vacio el div para evitar que se dupliquen elementos 
    ListaProductos.forEach((producto) => {//rrecorres la lista de productos 
        ElementoContenedorProductos.innerHTML += ProductoComponente(producto);//añado en el div cada producto
    });
    ListaProductos.forEach(producto => {//vuelvo a rercorrer la lista lo hago para añadir los eventos click
      document.getElementById("producto-" + producto.codigo).addEventListener("click",()=>comprar(producto.codigo))//añades evento clik segun el id del boton se le añade la funcion comprAR
      document.getElementById("descontar-"+ producto.codigo).addEventListener("click", () =>descuento(producto.codigo))////añades evento clik segun el id del boton se le añade la funcion DESCUENTO
    });
};


llenarData();//PINTAR POR PRIMERA VEZ LOS PRODUCTOS EN PANTALLA 