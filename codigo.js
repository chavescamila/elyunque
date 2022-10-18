function saludar(){
    return prompt('Ingrese su nombre por favor');
}

const nombreUsuario =  saludar();
    alert("¡Hola "+nombreUsuario+", te damos la bienvenida a la página oficial de Casillas El Yunque!")

function calcularPrecio (precioCasilla,ivaCalculado){
    let precioFinal=precioCasilla+ivaCalculado
    alert("El precio de la casilla con iva incluido es de: "+precioFinal);
}

let casilla= prompt("Ingrese el numero de la casilla de la cual desea conocer el precio:\n 1- Casilla para dos personas \n 2- Casilla para cuatro personas \n 3- Casilla para seis personas \n 4- Casilla comedor \n 5- Casilla dormitorio \n Presione la tecla + para conocer mas información sobre la casilla de su interes")

while (casilla != "+"){
    if (casilla == "1"){
        calcularPrecio(4100000,861000);
    }else if (casilla == "2"){
        calcularPrecio(4400000,924000);
    }else if (casilla == "3"){
        calcularPrecio(4700000,987000);
    }else if (casilla == "4"){
        calcularPrecio(4300000,903000);
    }else if (casilla == "5"){
        calcularPrecio(3900000,819000);
    }

    casilla=prompt("Ingrese el numero de la casilla de la cual desea conocer el precio:\n 1- Casilla para dos personas \n 2- Casilla para cuatro personas \n 3- Casilla para seis personas \n 4- Casilla comedor \n 5- Casilla dormitorio \n Presione la tecla + para conocer mas información sobre la casilla de su interes")

}

const productos = [
    {
        id:1,
        nombre:"Casilla 2P",
        detalle:"Casilla para dos personas",
        personas: 2,
        precio:4100000
    },
    {
        id:2,
        nombre:"Casilla 4P",
        detalle:"Casilla para 4 personas",
        personas: 4,
        precio:4400000
    },
    {
        id:3,
        nombre:"Casilla 6P",
        detalle:"Casilla para seis personas",
        personas: 6,
        precio:4700000
    },
    {
        id:4,
        nombre:"Casilla 16P",
        detalle:"Casilla dormitorio para dieciseis personas",
        personas: 16,
        precio:3900000
    }
];

productos.push(
    {
        id:5,
        nombre:"Casilla 20P",
        detalle:"Casilla comedor para veinte personas",
        personas: 20,
        precio:4300000
    }
);

let productoBuscado;
let productoEncontrado;

while (true){
    productoBuscado=prompt("Ingrese el numero de la casilla de la cual desea conocer más información:\n 1- Casilla para dos personas \n 2- Casilla para cuatro personas \n 3- Casilla para seis personas \n 4- Casilla comedor \n 5- Casilla dormitorio \n Presione la tecla + para continuar")
    if (productoBuscado == "+"){
        break;
    }else{
        productoEncontrado = productos.find(producto => producto.id == productoBuscado);
        console.log(productoEncontrado);
    }
}

let productoAFiltrar
let productoFiltrado

while (true){
    productoAFiltrar=prompt("¿Para cuantas personas necesita la casilla?:\n 1- Hasta 6 personas \n 2- Más de 6 personas  \n Escriba salir para finalizar")
    if (productoAFiltrar == "salir"){
        alert ("Hasta luego")
        break;
    }else if (productoAFiltrar == "1"){
        productoFiltrado = productos.filter((el)=>el.personas <=6)
        console.log(productoFiltrado);
    }else if (productoAFiltrar == "2"){
        productoFiltrado = productos.filter((el)=>el.personas >6)
        console.log(productoFiltrado);
    }
}