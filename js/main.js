const catalogo = [
    {id:1, nombre:"Florero", precio: 1300},
    {id:2, nombre:"Mesa", precio: 4500},
    {id:3, nombre:"Silla de plastico", precio: 2000},
    {id:4, nombre:"Silla ergonomica", precio: 3100},
    {id:5, nombre:"Mesa de plastico", precio: 3000},
    {id:6, nombre:"Copa del mundo", precio: 10}
]
const carrito = [];


let producto;
let lecturaObjetos;

let confirmarProducto = true;


const buscarCatalogo = (id)=>{
    return catalogo.find(item => item.id === id);
}


while(confirmarProducto){

    lecturaObjetos = parseInt(prompt("Escriba un numero segundo el producto que desea: " + catalogo.map(item=> "\n" +item.id + " - " + item.nombre + " $" + item.precio + "\n").join(" - ")));
    if(lecturaObjetos >= 1 && lecturaObjetos <= 6){

        producto = buscarCatalogo(lecturaObjetos);
        confirmarProducto = confirm("¿Lleva algo mas?");
    }else{
        alert("El número ingresado es inválido");
    }
    carrito.push(producto);
}console.log(carrito);

confirmarProducto = true;

let productoRemovido;

let lecturaProductos;

const buscarCarrito = (id)=>{
    return carrito.find(item => item.id === id);
}

let gastoTotal = 0;

while(confirmarProducto){
    lecturaProductos = parseInt(prompt("Si deseas eliminar algún producto, escriba el numero del producto: " + "\n" + "Estas comprando: \n" + carrito.map(item=> "\n" +item.id + " - " + item.nombre + " $" + item.precio + "\n").join(" - ")));
    if(lecturaProductos>=1 && lecturaProductos <= 6){
        productoRemovido = buscarCarrito(lecturaProductos);
        carrito.splice(((productoRemovido.id)-1),1);
    }else{
        alert("Ingrese un numero valido");
    }
    confirmarProducto = confirm("¿Desea eliminar algo mas?");
}console.log(carrito);

for(productos of carrito){
    gastoTotal += productos.precio;
}alert("Gasto Total: $" + gastoTotal);