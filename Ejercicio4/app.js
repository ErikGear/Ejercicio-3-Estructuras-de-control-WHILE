let palabraLetra = null;
let match = "";
let palabras = "";
let letras = "";

const expresiones = {
    palabra: /^[a-zA-Z]{2,16}$/,
    letra: /^[a-zA-Z]$/
};

do {

    palabraLetra = prompt("Ingrese una palabra o letra");

    if (expresiones.palabra.test(palabraLetra)) {
        palabras += palabraLetra;
    } else if (expresiones.letra.test(palabraLetra)) {
        letras += palabraLetra;
    } else {
        alert(`Fin del programa`);
        palabraLetra = null;
    }
    
} while (palabraLetra !== null);

alert(`Palabras: ${palabras}, Letras: ${letras}`);