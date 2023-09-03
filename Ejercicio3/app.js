let numero;
let numeros = [];

do {
    numero = parseInt(prompt("Ingrese un número"));
    
    if (typeof numero === "number") {
        if (numero !== 0) {
            numeros.push(numero);
        }        
            
    }

} while (numero !== 0);

alert(`ALos numeros digitados son: ${numeros}`);

