// Carrito de compras 
//                                  PRIMER ENTREGA DE LA PAGINA ONIXGLAM, SECCION CARRITO

const productos = [
 {nombre: "teclado", precio: 850},
 {nombre:"Lentes ", precio:15850},
 {nombre:"Laptop", precio:21956},
 {nombre: "dron", precio: 32258}
]

let carrito = []


alert("Bienvenido a onixglam la tienda online en linea mas grande")
let seleccion = prompt ("¿Deseas comprar algo? (Escribe si o no)")

while (seleccion != "si"  && seleccion != "no") {
    alert ("Ingresa si o no")
    seleccion  = prompt ("¿Deseas comprar algo? (Escribe si o no)")   
}
if ( seleccion == "si"){
    alert("Que producto te interesa comprar?  \n Los siguientes son los productos con los que contamos:")
       let productoInventario = productos.map(
        (productos) => productos.nombre + " " + "-" + "$" +productos.precio + " " + "MXN" 
       );
       alert(productoInventario.join(" - "))
}else if (seleccion == "no" ){
    alert ("gracias por preferirnos, vuelva pronto")
}

   /* un while que le pide al usuario si quiere continuar comprando, Si ellos dicen que no, entonces se imprimira por consola los productos en el carrito y el todal del precio del carrito.*/
while (seleccion != "no" ){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0 
    if (producto == "dron" || producto == "DRON" || producto == "laptop"  || producto == "LAPTOP" || producto == "lentes" || producto == "LENTES" || producto == "TECLADO" || producto == "teclado"){
        switch (producto) {
            case "dron" || "DRON":
                precio = 32258
                break;
            case "laptop" || "LAPTOP":
                precio = 21956
                break;
            case "lentes" || "LENTES":
                precio = 15850
                break;
            case "teclado" || "TECLADO":
                precio = 850
                break;
        
            default:
                break;
        }
        let cantidad = parseInt(prompt ("Cuantas unidades quieres llevar?"))

        carrito.push({producto,cantidad, precio})
        console.log(carrito)
    }else {
        alert("Lamentablemente no contamos con ese producto")
    }
    seleccion = prompt ("Deseas continuar comprando")

    while (seleccion === "no") {
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto:
                    ${carritoFinal.producto},
                    cantidad: ${carritoFinal.cantidad},
                    precio: ${carritoFinal.precio},
                    el total a pagar por unidades elegidas ${carritoFinal.cantidad* carritoFinal.precio}`)
        })
        break;
    }
}






