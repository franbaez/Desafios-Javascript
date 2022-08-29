//Solicitamos al usuario que ingrese 3 numeros//

while(true){
    var num1 = parseInt(prompt("Ingrese el primer número"));
    var num2 = parseInt(prompt("Ingrese el segundo número"));
    var num3 = parseInt(prompt("Ingrese el tercer número que multiplicara los dos números ingresados anteriormente"));
    if(!isNaN(num1) && num1 != null && num1 !=""){
        //alert("es un numero valido");
        break;
    }else{
        alert("El primer número ingresado no es valido por favor ingrese un numero entero");
    } 

    if(!isNaN(num2) && num2 != null && num2 !=""){
        //alert("es un numero valido");
        break;
    }else{
        alert("El segundo número ingresado no es valido por favor ingrese un numero entero");
    }
    
    if(!isNaN(num3) && num3 != null && num3 !=""){
        //alert("es un numero valido");
        break;
    }else{
        alert("El tercer número ingresado no es valido por favor ingrese un numero entero");
    } 
}

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
document.write("<h3> El primer número ingresado fue: "+num1);
document.write("<h3> El segundo número ingresado fue: "+num2);
document.write("<h3> El tercer número ingresado fue: "+num3);


function CalculoSuma(num1 , num2){
    let suma = num1 + num2;
    return (suma);
}

function CalculoResta(num1 , num2){
    let resta = num1 - num2;
    return (resta);
}

function CalculoMultiplicacion(num1 , num2){
    let suma = num1 + num2;
    return (suma * num3);
}

function CalculoDivision(num1 , num2){
    let suma = num1 + num2;
    return (suma / num3);
}

var suma = CalculoSuma(num1, num2);
var resta = CalculoResta(num1 , num2);
var multiplicacion = CalculoMultiplicacion(num1 , num2);
var division = CalculoDivision(num1 , num2);
division = division.toFixed(2);

document.write("<h3>El resultado de la suma del número 1 y el número 2 es: "+suma);
document.write("<h3>El resultado de la resta del número 1 y el número 2 es: "+resta);
document.write("<h3>Si multiplicamos la suma de número 1 y número 2 con el número 3 el resultado es: "+multiplicacion);
document.write("<h3>Si dividimos la suma de número 1 y número 2 con el número 3 el resultado es: "+division);

