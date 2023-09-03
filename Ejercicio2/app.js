let num1;
let num2;

let rangoNumeros = false;


let esNumero = false;

do {
  num1 = parseInt(prompt("Ingrese un número" + '\n en un rango de "1-50" '));
  num2 = parseInt(prompt("Ingrese otro número" + '\n en un rango de "1-50" '));

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert(`Error, ingrese numeros validos, usted digito ${num1} y ${num2}`);
    esNumero = false;
  } else if ((num1 < 0 || num1 > 50) && (num2 < 0 || num2 > 50)) {
    alert(`Error, numero ${parseNum1} y ${parseNum2} fuera de rango`);
    rangoNumeros = false;
    
  } else {
    i = 1;
    let mensaje = `¡Lotería! los numeros son: `;
    while (i <= 50) {
      if (i === num1 || i === num2) {
        mensaje += i + " ";
      } 
      i++;
    }

    alert(mensaje);

    esNumero = true;
    rangoNumeros = true;
  }
} while (!esNumero || !rangoNumeros);
