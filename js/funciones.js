const renderProductos = () => {
    let contenido = document.getElementById("contenido");
    let contenidoHTML = `<p class="image"><img src="https://cdn-icons-png.flaticon.com/512/18/18399.png" alt="carrito" class="img-fluid"></p>`;
    
    if (productos.length > 0) {
        let i=0;
        let productochequeado;
        let productocompleto;
        contenidoHTML = `<table class="table">`;

        productos.forEach(item => {
            contenidoHTML += `<tr>
                <td>`;

                if (item.completada) {
                    productochequeado = "checked";
                    productocompleto = "text-decoration-line-through";
                } else {
                    productochequeado = "";
                    productocompleto = "";
                }

                contenidoHTML += `<div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="tarea${i}" ${productochequeado} onclick="completarTarea('${item.nombre}');">
                <label class="form-check-label ${productocompleto}" for="tarea${i}">${item.nombre}</label>
                </div>
                </td>
                <td class="text-end">
                <button type="button" class="btn-close" aria-label="Close" onclick="eliminarTarea('${item.nombre}');"></button>
                </td>
            </tr>`;
        });

        contenidoHTML += `<tr>
        <td>Total productos: ${productos.length}</td>
        <td class="text-end"><button class="btn btn-light" onclick="imprimir();">imprimir</button>
        </tr>
        </table>`;
    }

    contenido.innerHTML = contenidoHTML;
}

const agregarProducto = () => {
    let producto = document.getElementById("producto");
    
    if (producto.value == "") {
        producto.classList.add("animate__animated", "animate__tada");
        return false; 
    } else {
        producto.classList.remove("animate__animated", "animate__tada");
    }

    const nuevoproducto = {nombre:producto.value, completada:false}; 
    productos.push(nuevoproducto); productos
    producto.value = ""; 
    renderProductos(); 
}

const completarproducto = (nombre) => {
    let producto = productos.find(item => item.nombre === nombre); 
    if (producto.completada) {
        producto.completada = false;
    } else {
        producto.completada = true;
    }

    renderProductos();
}

const eliminarTarea = (nombre) => {
    productos = productos.filter(item => item.nombre !== nombre);
    renderProductos();
}

const imprimir = () => {
    productos = [];
    renderProductos();
    prompt("ingrese su email para recibir su lista:")
    alert("tu lista final fue enviada, ¡gracias por elegirnos! ")
}

 









    