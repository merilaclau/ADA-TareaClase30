/* Crear un programa que pida al usuario ingresar un numero 
y mostrar en un mensaje si el valor ingresado es par o impar.*/

let numero = parseInt(prompt("Ingresá un número"));

if ((numero % 2) === 1 ) {
        alert("El valor ingresado es impar 🤓")
    }
else if ((numero % 2) === 0 ) {
        alert("El valor ingresado es par 🤓")
    }
else {
        alert("Valor incorrecto, volvé a intentar ;)")
    }

//===================================================//

/*Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar 
y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. 
Opciones:
1/4kg: 2 sabores.
1/2kg: 3 sabores.
3/4kg: 4 sabores.
1kg: 5 sabores.*/

let heladoKg = prompt("¿Cuántos kilos de helado vas a comprar?");

if (heladoKg === "1/4") {
    alert("Podés elegir hasta dos sabores 🍦🍦")
}
else if (heladoKg === "1/2") {
    alert("Podés elegir hasta tres sabores 🍦🍦🍦")
}
else if (heladoKg === "3/4") {
    alert("Podés elegir hasta cuatro sabores 🍦🍦🍦🍦")
}
else if (heladoKg === "1") {
    alert("Podés elegir hasta cinco sabores 🍦🍦🍦🍦🍦")
}
else {
    alert("Valor incorrecto, te quedaste sin helado. A llorar a la iglesia 🖕")
}

//===================================================//

/*Crear un programa que pida por un mes 
y devuelva la cantidad de días que ese mes tiene.*/

let mes = prompt("Ingresá un mes");

if (mes === "enero" || mes === "marzo" || mes ===  "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
    alert("Este mes tiene 31 días y tu sueldo va a durar menos. Ups 💸💸💸")
}
else if (mes === "febrero") {
    alert("Este mes tiene 28 días y va a llover sin parar. Lo que mata es la humedad ⛈️")
}
else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
    alert("Este mes tiene 30 días. Por cierto, no te olvides de comer ñoquis el 29 🍝")
}
else {
    alert("Valor incorrecto, dejá de flashear 💊")
}