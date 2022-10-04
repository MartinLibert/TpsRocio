//crear un algoritmo con un condicional

//crear un algoritmo utilizando un ciclo

//Armar un simulador interactivo, la estructura final de tu proyecto integrador



//ROCIO BELEN GARROCHO  

// ESTE DESAFIO TRATA DE INDUMENTARIA
function mostrar () {

    //variables para el ciclo while

    let seguir;
    let tipos;
    let cantidadDeStock;
    let marcas;
    let precios;
    let talles;
    let mensaje;
	

    //esta variable servira para mostrar cantidad total de stock de los productos que se ingresaron

    let acumuladorTotalDeStock = 0;

    //esta variable indicara el promedio de precios de pantalones, remeras y gorras

    let acumuladorPrecioPantalon = 0;
    let contadorPantalon = 0;
    let promedioPrecioPantalon;

    let acumuladorPrecioRemeras = 0;
    let contadorRemeras = 0;
    let promedioPrecioRemeras;

    let acumuladorPrecioGorras = 0;
    let contadorGorras = 0;
    let promedioPrecioGorras;

    //esta variable indicara el producto que mas se vendio
    let productoMasVendido;
    //ciclo while sin limite de carga

    while (seguir!= "no") {

        marcas = prompt ("Ingrese la marca deseada");

        tipos = prompt ("Ingrese el tipo de producto que quiere.");
        //validacion
        while (tipos !="gorras" && tipos !="remeras" && tipos !="pantalones"){

            tipos = prompt ("ERROR, ingrese producto, remeras/ pantalones/ gorras.");
        }
        
        cantidadDeStock = prompt ("Ingrese la cantidad de stock");
        //validacion
        while (cantidadDeStock <0 || cantidadDeStock > 300 ) {
            //validacion
            cantidadDeStock = prompt ("ERROR, ingrese nuevamente (limite de 300) ");
        }

        precios = prompt ("Ingrese el precio del producto");

        talles = prompt ("Ingrese el talle");
        //validacion
        while (talles<0 || talles > 5) {
        talles = prompt ("No hay este talle, ingrese nuevamente");
        }

        switch (tipos){
            case "remeras":
                contadorRemeras++;
                acumuladorPrecioRemeras = acumuladorPrecioRemeras+precios;
                break;
            case "pantalones":
                contadorPantalon++;
                acumuladorPrecioPantalon = acumuladorPrecioRemeras+precios;
                break;
            case "gorras":
                contadorGorras++
                acumuladorPrecioGorras = acumuladorPrecioGorras+precios;
                break;
        }


        if (contadorRemeras>contadorPantalon && contadorRemeras > contadorGorras){
			productoMasVendido=tipos;
        }

        else if(contadorPantalon> contadorRemeras && contadorPantalon> contadorGorras){
			productoMasVendido=tipos;
        }
        else {
			productoMasVendido=tipos;
        }


        acumuladorTotalDeStock = acumuladorTotalDeStock + cantidadDeStock;
        seguir = prompt ("Desea seguir ingresando datos?");

    }

    promedioPrecioPantalon = (acumuladorPrecioPantalon / contadorPantalon);
    promedioPrecioRemeras= (acumuladorPrecioRemeras / contadorRemeras);
    promedioPrecioGorras= (acumuladorPrecioGorras / contadorGorras);


    //mensajes que mostrara la consola
    mensaje = "Esta es la cantidad total de los productos " + acumuladorTotalDeStock;
    mensaje = mensaje + "<br> El promedio de los precios de pantalones es " + promedioPrecioPantalon;
    mensaje = mensaje + "<br> El promedio de los precios de remeras es  " + promedioPrecioRemeras;
    mensaje = mensaje + "<br> El promedio de los precios de gorras es  " + promedioPrecioGorras;
	mensaje = mensaje + "<br> El producto mas vendido es " + productoMasVendido;

    
    
    console.log(mensaje);
}
