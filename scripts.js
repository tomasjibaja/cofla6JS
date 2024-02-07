const contenedor = document.querySelector(".flex-container");
let ultimaLlave;

/* Esta función crea lavariablede imagen y asigna las variables,
segun loque se le haya pasado, como HTML.
Retorna la concatenación de todos losvalores listo para 
incorporar como HTML */
function crearLlave(nombre, modelo, precio) {
    let img = "<img src='llave.png' width='108' />";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img + nombre + modelo + precio];
}

/* Esta función muestra un mmensaje confirmando el modelo comprado*/
function compraRealizada() {
    alert(`Has comprado la llave modelo ${document.querySelector(".key--data").value}`)
}

/* Esta función selecciona el input hidden, que es un input no mostrado
que sirve para almmacenar el mmodelo de llave seleccionado.
Luego chequea si la variable ultimallave es nula. Si no lo es,
a esa llave le saca la clase selected.
Luego le asigna a la variable ultimaLlave la llave actual y le agrega la
clase selected.
Al final scrollea hasta el boton comprar */
const changeHidden = (modeloRandom) => {
    document.querySelector(".key--data").value = modeloRandom;
    if(ultimaLlave != null) {
        ultimaLlave.classList.remove("selected");
    }
    ultimaLlave = document.getElementById(modeloRandom);
    ultimaLlave.classList.add("selected");
    document.getElementById("boton--compra").scrollIntoView();
}

/* Este bucle crea todas las llaves entre las cuales
se puede elegir.
Crea el nro de modelo, crea el precio, todo random.
Crea la variable llave y le asigna lo que crea la función que
habíamos definido.
Al final, le agrega la llave creada al contenedor */ 
for (i = 0; i < 20; i++) {
    let modeloRandom = Math.floor(Math.random() * 90) + 100;
    let precioRandom = Math.floor(Math.random() * 2000) + 2700;
    let llave = crearLlave(`Llave ${i + 1}`, `Modelo ${modeloRandom}`, precioRandom);
    contenedor.innerHTML +=
    `<div class="llave" id="${modeloRandom}" onclick="changeHidden(${modeloRandom})">${llave}</div>`;
}
