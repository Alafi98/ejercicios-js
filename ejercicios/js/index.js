// 1 hallar el valor mayor de dos numeros
// 2 sumar, restar, multiplicar y dividir los numeros
// 3 calcular la raiz cuadrada de los numeros agregados 

//string 
// 1 identificar la longitud de  la cadena de texto agregado
// 2 invertir la cadena de texto 
// 3 repertir el texto

//arrays 
//1 agregar valores al array al principio 
//2 
//3 sumar todos los numeros del array (1,2,3)=6

// iterradores
// 1 muestra los elementos del iterrador
// 2 iterar un array de numeros y devolverme el valor 
// 


//ejemplo: 

//2 suma

let valor1 = prompt('Escriba el primer valor');
let valor2 = prompt('Escriba el segundo valor');

function sumar(a, b) {
    console.log('soy una suma ' + (parseInt(a) + parseInt(b)));
}

sumar(valor1, valor2);


// ejercicios 

//1 

function igualdad(a, b) {
    if (a > b) {
    console.log('valor ' + a + ' es mayor que ' + b);
} else (a < b) 
    console.log('valor ' + b + ' es mayor que  ' + a); 

}

igualdad(valor1, valor2);





//2 resta 

function restar(a, b) {
    console.log('soy una resta ' + (a - b));
}

restar(valor1, valor2);

//multiplicacion

function multipicar(a, b) {
    console.log('soy una multiplicacion ' + (a * b));
}

multipicar(valor1, valor2);

//division 

function dividir(a, b) {
    console.log('soy una division ' + (a/b));
}

dividir(valor1, valor2);


//3 

function raiz(a) {
    console.log(Math.sqrt(a));
    

}
raiz(valor1);


//string

//1 

var miCadena = ("cuantas letras tengo?")

console.log(miCadena.length);

//3 

let cadenaRepetida = prompt('que quieres repetir? ');
let vecesRepeat = prompt('cuantas veces quieres repetir? ')
let final = cadenaRepetida.repeat(vecesRepeat);

console.log(final);



