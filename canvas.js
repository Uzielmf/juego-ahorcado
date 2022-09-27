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