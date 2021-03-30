function comprar(codigo) {
  const producto = ListaProductos.filter((el) => el.codigo === codigo);
  if (producto.length > 0) {
    if (producto[0].stock !== 0) {
      ListaProductos = ListaProductos.filter((el) => el.codigo !== codigo);
      ListaProductos = [
        ...ListaProductos,
        { ...producto[0], stock: producto[0].stock - 1 },
      ];
      ListaProductos = ListaProductos.sort(function (a, b) {
        if (a.codigo > b.codigo) {
          return 1;
        }
        if (a.codigo < b.codigo) {
          return -1;
        }
        return 0;
      });
      llenarData();
    } else {
      alert("Esta agotado");
    }
  }
}

function descuento(codigo) {
  const productoEncontrado = ListaProductos.filter((el) => el.codigo === codigo);//filtra la lsta de productos para encontrar el producto a modificar --- filter retorna a unarreglo
  if (productoEncontrado.length > 0) {//verifica que hay elementos dentro del areglo                que existen
    if (
      productoEncontrado[0].precio === productoEncontrado[0].precioDescontado && //verificando que el precio es igual al precio descontado
      productoEncontrado[0].precio > productoEncontrado[0].rebaja//verico que el precio sea mayor a la rebajaq
    ) {
      ListaProductos = ListaProductos.filter((el) => el.codigo !== codigo);//filtro la lista de productos para encontrar los elementos que no son el producto que encontre
      ListaProductos = [//
        ...ListaProductos,//asigno a lidsta de productos losm productos que acabo de filtrar, es decir no contiene el elemento encontrado
        {
          ...productoEncontrado[0],//asigno el producto que encontre
          precioDescontado: productoEncontrado[0].precio - productoEncontrado[0].rebaja,// en este momento estoy aplicando la rebaja
        },
      ];
      ListaProductos = ListaProductos.sort(function (a, b) {// este codigo ordena el arreglo como estaba
        if (a.codigo > b.codigo) {
          return 1;
        }
        if (a.codigo < b.codigo) {
          return -1;
        }
        return 0;
      });
      llenarData();//REPINTA UNA ACTUALIOZACION DE LA LISTA DE  PRODUCTOS
    } else {
      alert("No califica para mas DESCUENTO");
    }
  }
}

/*function beneficios(codigo) {
  const miProducto = ListaProductos.filter((el) => el.codigo === codigo);
    if (miProducto.length > 0) {
      if (miProducto[0].codigo === miProducto[0].codigo) {
        ListaProductos = ListaProductos.filter((el) => el.codigo !== codigo);
        ListaProductos = [
          ...miProducto[0],
        ];
        ListaProductos = ListaProductos.sort(function (a, b) {
          if (a.codigo > b.codigo) {
            return 1;
          }
            if (a.codigo < b.codigo) {
              return -1;
            }
            return 0;
        });
        llenarData(); 
      }
    }
}



//function descuento(descontar)
//alert("no jodas te estoy dejando barato y quieres rebaja ")

/*function productPorCode (codigo) {
  const elProducEncontEnLa = descripcionProduct.filter((el) => el.codigo === codigo);//la conts elProductEnconEnLa ahora obtiene el arreglo
    if(elProducEncontEnLa.length > 0) { //que existe un producto
      descripcionProduct = descripcionProduct.filter((el) => el.codigo !== codigo);
      descripcionProduct = [
        ...productoEncontrado[0]
      ]
      
        descripcionProduct = descripcionProduct.sort(function (a, b) {
          if (a.codigo > b.codigo) {
            return 1;
          }
          if (a.codigo < b.codigo) {
            return -1;
          }
          return 0;
          });

          productPorCode();//REPINTA UNA ACTUALIOZACION DE LA LISTA DE  PRODUCTOS
        
      }
    }*/
