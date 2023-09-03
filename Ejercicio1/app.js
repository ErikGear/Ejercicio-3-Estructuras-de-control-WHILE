let numero = "";
let parseNumero = 0;
let isNumber = [];

do {

    numero = prompt("Ingrese un numero");
    isNumber = numero.match(/^\d+$/);

    if (isNumber) {
        parseNumero = parseInt(numero);
        let  i = 1;
        while ( i <= parseNumero) {
            if ( i % 5 === 0 ) {
                console.log(`El número ${i}, es multiplo de 5`);
            }
        }
    } else {
        alert(`Usted digito ${numero}, por favor ingrese un numero valido`);
    }
    
} while (!isNumber);