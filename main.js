//SELECTORES
let palabras =["ALURA","ORACLE","ONE","LEPEPE","YAVUELVA","UZIEL", "CHIQUITA"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";
let letras = [];


//Funcion para la palabra secreta
function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function comprobarLetra(key) {
    let estado = false;
    if (key > 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key)
        console.log(key);
        return estado;
    }else{
        estado = true;
        console.log(key);
        return estado;
    }
}

//Funcion para inicar el juego (borra los elementos)
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("image-horca").style.display = "none";
    document.getElementById("agregar-palabra").style.display = "none";

    escojerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
        comprobarLetra(letra) 
    }
}