class Producto { 
    constructor(nombre, precio, genero,){
     this.nombre = nombre;
     this.precio = parseFloat (precio);
     this.genero = genero;    
    }
    
    
 }
    var mangas = [];
    
    do{
        var verificacion = prompt('Ingresa el nombre del Manga o la palabra fin para terminar de agregar');
        if (verificacion === "FIN" || verificacion === "Fin" || verificacion === "fin"){
            break;
        }else{
            nombreM = verificacion;
            var precioM = prompt('Ingresa el precio del Manga');
            var generoM = prompt('Ingresa el genero al que pertence el Manga');
            mangas.push(new Producto(nombreM, precioM, generoM));
        }
    }
    while (verificacion != "fin" || verificacion != "FIN" || verificacion != "Fin")

    for(var producto of mangas) {
        document.write("<h3>Nombre: " + producto.nombre + " Genero: " + producto.genero  + " Precio: " + producto.precio,"</h3>");
        
    }
    
    var ordenadosPrecio = [];
    ordenadosPrecio = mangas.map(elemento => elemento);
    var ordenadosPrecio = mangas;
    ordenadosPrecio.sort(function(a, b){
        return a.precio - b.precio;
    });

    document.write("<h2> Lista de Precios de los Mangas ordenandos de menos a mayor: </h2>");

    for (var producto of ordenadosPrecio){
        document.write("<h3>Nombre: " + producto.nombre + " Precio: " + producto.precio ,"</h3>");
    }

    