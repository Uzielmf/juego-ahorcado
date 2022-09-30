//dibujar al mono en la horca

//Palo de la horca
function dibujarPrimerTrazo() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    tablero.moveTo(900,90)
    tablero.lineTo(900, 450)
    tablero.stroke();
    tablero.closePath();
}

//Palo donde cuelga la cuerda
function dibujarSegundoTrazo() {
    tablero.lineWidth = 6;
    // tablero.lineCap = "round";
    // tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    tablero.moveTo(900,90)
    tablero.lineTo(1050, 90)
    tablero.stroke();
    tablero.closePath();
}

//cuerda de la horca
function dibujarTercerTrazo() {
    tablero.lineWidth = 6;
    // tablero.lineCap = "round";
    // tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    tablero.moveTo(1050,90)
    tablero.lineTo(1050, 120)
    tablero.stroke();
    tablero.closePath();
}

//Cabeza del ahorcado
function dibujarCuartoTrazo() {
    // tablero.lineWidth = 8;
    // tablero.lineCap = "round";
    // tablero.lineJoin = "round";
    // tablero.fillStyle= "#052606"
    // tablero.strokeStyle = "#8A3871"

    // tablero.moveTo(1000,140)
    // tablero.lineTo(1050, 180)
    // tablero.stroke();
    // tablero.closePath();

    tablero.beginPath();
    tablero.fillStyle = '#ffffff';
    tablero.strokeStyle = '#8A3871';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";

    tablero.arc(1050, 150, 20, 0, 2 * Math.PI, false);
    tablero.fill();
    tablero.stroke();
    tablero.closePath();
}

//cuerpo del ahorcado
function dibujarQuintoTrazo() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    tablero.moveTo(1050,180)
    tablero.lineTo(1050, 240)
    tablero.stroke();
    tablero.closePath();
}

//brazo izquierdo del ahorcado 
function dibujarSextoTrazo() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    tablero.moveTo(1050,180)
    tablero.lineTo(1000, 220)
    tablero.stroke();
    tablero.closePath();
}

//brazo derecho del ahorcado
function dibujarSeptimoTrazo() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    tablero.moveTo(1050,180)
    tablero.lineTo(1100, 220)
    tablero.stroke();
    tablero.closePath();
}

//pie izquierdo del ahorcado
function dibujarOctavoTrazo() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    tablero.moveTo(1050,240)
    tablero.lineTo(1020, 300)
    tablero.stroke();
    tablero.closePath();
}

//pie derecho del ahorcado
function dibujarNovenoTrazo() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    tablero.moveTo(1050,240)
    tablero.lineTo(1080, 300)
    tablero.stroke();
    tablero.closePath();
}