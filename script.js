
//variables y tipos de datos//
let a = 12;
let b = "letra";
let c = true;
let d = false;
let x;
let y = null;
let arreglo = [a, b, c, d, x, y]


console.log (arreglo);
console.log(typeof a, b, c, d, x, y, arreglo);

//mayor, igual o menor que 10//
if (a > 10) {
    console.log("mayor")
  } else if (n1 == 10) {
    console.log("igual")
  } else {
    console.log("menor")
  }

//par o impar//

if (a %2===0){
    console.log("es par")
} else{
    console.log("es impar")
}

//vocal o consonante//
let letra = prompt("Ingresa una letra:").toLowerCase();

if(/[aeiou]/.test(letra)) {
  console.log("La letra ingresada es una vocal");
} else if (/[b-df-hj-np-tv-z]/.test(letra)) {
  console.log("La letra ingresada es una consonante");
}

//menor o mayor de edad//
let edad = 17

if (edad >= 18) {
  console.log("mayor de edad")
}  else {
  console.log("menor de edad")
}

//identificar el dia de la semana ingresando un numero del 1 al 7//
let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

switch (numero) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
}


//funcion de 2 argumentos que devuelve la suma//
function sumar (a, b){
    return a + b;
  }
  
  let resultado= sumar (3,7)
  console.log(resultado)
  
  //Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function esPar(numero) {
  if (numero%2 === 0){
    return true
  } else {
    return false;
  }
  
}


//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}


//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
function longitudStringMasLargo(strings) {
  let longitudMasLarga = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longitudMasLarga) {
      longitudMasLarga = strings[i].length;
    }
  }
  return longitudMasLarga;
}

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
function valoresDePropiedades(objeto) {
  let valores = [];
  for (let propiedad in objeto) {
    valores.push(objeto[propiedad]);
  }
  return valores;
}

//escribe un bucle for que imprima en la consola los numeros del 1 al 10
for(let i=1 ; i <= 10; i++) {
  console.log(i);
}

//escribe un bucle while que imprima en la consola los numero del 1 al 5
let i= 1
while (i <= 10){
  console.log(i);
  i++
}

//crea un vector con los numeros del 1 al 5. Escribe un bucle for que imprima en la consola 
//cada uno de los elementos del vector.
let vector = [1, 2, 3, 4, 5];

for (let i=0; i < vector.length; i++){
    console.log(vector[i]);
}

//crea una funcion que reciba un numero n y devuelva la suma de todos los numero del 1 al n
//Utiliza un bucle for para calcular la suma y muestra el resultado de la consola.
  function sumaN(n){
    let suma= 0;
    for(let i=1; i <= n; i++){
      suma += i;
    } return suma;
  }

  let resultadoN = sumaN(5);
  console.log(resultadoN);

  //crea una funcion que reciba un vector y devuelva la suma de todos sus elementos.
  //utiliza un bucle white para calcular la suma y muestra el resultado en la consola.
  let vector1 = [1, 2, 3];
  
  function sumaVector(vector1){
    let i= 0;
    let suma= 0;
    while(i< vector1.length){
      suma += vector1[i];
      i++;
    } return suma;
  }
  let resultado1 = sumaVector(vector1);
  console.log(resultado1);

  const miBoton = document.querySelector("#Boton");
  const miMensaje = document.querySelector("#mensaje");

  miBoton.addEventListener("click", function () {
    const mensaje= "Que tengas lindo día";
    miMensaje.innerHTML = mensaje;
  })