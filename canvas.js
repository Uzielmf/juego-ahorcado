function dibujarCanvas() {
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#052606"
    tablero.strokeStyle = "#8A3871"

    tablero.fillRect(0,0,700,400)
    tablero.beginPath();
    tablero.moveTo(250,200)
    tablero.lineTo(400, 200)
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#052606"
    tablero.strokeStyle = "#8A3871"

    let anchura = 600/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(200 + (anchura*i), 350)
        tablero.lineTo(250 + (anchura*i), 350)
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index) {
    tablero.font = "bold 63px monospace";
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillRect=  "#052606";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 205 + (anchura*index),330)
    tablero.stroke()
}

function escribirLetraIncorrecta(letra, errorLeft) {
    tablero.font = "bold 40px monospace";
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillRect=  "#052606";

    tablero.fillText(letra, 235 + (40 * (10-errorLeft)), 420,40 )
}