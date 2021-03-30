let params = new URLSearchParams(location.search);
const codigoProducto = params.get("codigo") // Codigo del producto que quiero que muestres.

//TU TAREA ES MOSTRAR LA DATA DEL PRODUCTO SEGUN EL CODIGO QUE TIENES.

//DEBES MOSTRARLOS EN LA PANTALLA XD

const mostrarProducto = (data) => {     //aqui se costruye el componete producto 
    return `<div>
    <div class="imageProductos">
      <img src="${data.imagen}">
        </div>
    <div class="description">
      <h1 class="nombre">${data.nombre}</h1>
      <p class="marca">${data.marca}</p>
      <p class="precio">${data.precio}</p>
      <p>${data.promocion}</p>
      <div class="envio">
        <i class="fa fa-car"></i><span>Envio s/ 9.90</span>
      </div>
      <div class="visa">
      <a href= "./cmrVisa.html?codigo=${data.codigo}">        
      <button id="producto">${data.miCmr}</button>
      </a>
      
      <img src="${data.imagen2}">
      </div>
      <p class="enviado">enviado y vendido por: <br> Ing. Ruben Cordova Velasquez</p>
      </div>
  <div class="caracteristicas">
    <div class="lista">
      <h2>caracteristicas del Producto</h2>
      <p>${data.caracteristica}</p>
      <li>Garantia de 12 meses</li>
      <li>${data.lista2}</li>
      <li>${data.lista3}</li>
      <li>${data.lista4}</li>
      <li>${data.lista5}</li>
      <li>Tarjeta de Video UHD Graphics 600</li>
      <li>wifi</li>
      <li>Bluetooth</li>
      <li>Slot para memoria sd </li>
    </div>
    <div class="reseña">
      <h1>Reseña del producto</h1>
      <p>Este producto aun no tiene reseñas <br> ¡se el primero en compartirnos tu opinion!</p>
    </div>
    </div>
    </div>`;
};


const productPorCode = () =>{

  const ListaFiltradaProductos = ListaProductos.filter(producto => producto.codigo === parseInt(codigoProducto))

  if(ListaFiltradaProductos.length > 0){ //si existe
    const describeProducto = document.getElementById("contenedorProducto");
    describeProducto.innerHTML = mostrarProducto(ListaFiltradaProductos[0])
  }
};

productPorCode();//PINTAR POR PRIMERA VEZ LOS PRODUCTOS EN PANTALLA 

