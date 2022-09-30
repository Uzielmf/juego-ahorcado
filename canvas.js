function dibujarCanvas() {
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#052606"
    tablero.strokeStyle = "#8A3871"

    tablero.fillRect(0,0,700,400)
    tablero.beginPath();
    tablero.moveTo(800,450)
    tablero.lineTo(1050, 450)
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#ffffff"
    tablero.strokeStyle = "#8A3871"

    let anchura = 600/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(100 + (anchura*i), 390)
        tablero.lineTo(150 + (anchura*i), 390)
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index) {
    tablero.font = "bold 50px monospace";
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillRect=  "#d7e2f0";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 110 + (anchura*index),380)
    tablero.stroke()
}

function escribirLetraIncorrecta(letra, errorLeft) {
    tablero.font = "bold 40px monospace";
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillRect=  "#d7e2f0";

    tablero.fillText(letra, 90 + (40 * (10-errorLeft)), 470,40 )
}



