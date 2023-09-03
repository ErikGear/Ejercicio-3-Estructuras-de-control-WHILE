let dias = [
  "lunes",
  "martes",
  "miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];
let dia = null;
let ingresoDia = null;

function diaSemana(dia) {
  if (dia < 0 || dia > 7) {
    throw new Error("Error, Fuera de rango");
  }

  return dias[dia - 1];
}

do {
  ingresoDia = parseInt(
    prompt(
      "¡Bienvenido!" +
        "\n Seleccione una opción:" +
        "\n 1. Lunes" +
        "\n 2. Martes" +
        "\n 3. Miercoles" +
        "\n 4. Jueves" +
        "\n 5. Viernes" +
        "\n 6. Sabado" +
        "\n 7. Domingo"
    )
  );

  if (typeof ingresoDia !== "number") {
    throw new Error("Error, Opción Invalida");
  } else {
    dia = diaSemana(ingresoDia);

    switch (dia) {
      case "Lunes":
        alert(`${dia}, iniciando la seman`);
        break;
      case "Martes":
        alert(`${dia}, trabaja duro`);
        break;
      case "Miercoles":
        alert(`${dia}, estamos a mitad`);
        break;
      case "Jueves":
        alert(`${dia}, ya casi es viernes`);
        break;
      case "Viernes":
        alert(`${dia}, a jugar Xbox`);
        break;
      case "Sabado":
        alert(`${dia}, seguimos jugando xbox`);
        break;
      default:
        alert(`Ve a descansar`);
        break;
    }
  }
} while (dia !== "Domingo");
