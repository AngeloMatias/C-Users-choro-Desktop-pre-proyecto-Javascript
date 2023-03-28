//gestion de turnos

//vamos a hacer un script para la operacion
//"gestion de turnos de la empresa"
//"ingrese su numero de DNI"
//tiene 3 intentos
//si ingresa bien, poner bienvenido esperamos que hoy tenga una jornada muy productiva!
//si da error comuniquese con el sector de sistemas al 378800 por renovacion de contraseñas
//menu
//1-Dar asistencia
//3-Reuniones
//4-Recibo digital

//7-Salir

//Hasta luego!







let DNIempresa = "43351974";

let ingreso = false;

for (let i = 2; i >= 0; i--) {

    let dniingresar = prompt("Ingrese su DNI");
    if (dniingresar === DNIempresa) {
        alert("Que tenga un buen dia!");
        ingreso = true;
        break;
    } else {
        alert("DNI incorrecto, ingrese nuevamente")
    }

}

if (ingreso) {
    let asist = 19;
    let opcion = prompt(

        "Menu: \n1-Dar asistencia\n2- Reuniones\n3- Recibos de trabajo\nPuedes salir precionando la Z");



    while (opcion != "Z") {
        switch (opcion) {
            case "1":
                alert("Hemos anotado tu asistencia para el dia de hoy!");
                break;

            case "2":
                alert("hoy tiene agendado una reunion a las 16:30");
                break;
            case "3":
                alert("Puede retirar su recibo en los proximos 30 min en la seccion de tramites")


            default:
                alert("esta opcion no es valida")
                break;

        }
        opcion = prompt(
            "Menu: \n1-Dar asistencia\n2- Reuniones\n3- Recibos de trabajo\nPuedes salir precionando la Z");

    }

}