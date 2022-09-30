//SELECTORES
let palabras =["ALURA","ORACLE","ONE","HOLA","AZUL","UZIEL", "HORCA"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 8;


//Funcion para la palabra secreta
function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

//funcion para comprobrar que la tecla sea una letra
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


//funcion para contar los errores
function anadirLetraCorrecta() {
    errores -= 1;
    console.log(errores);
    
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

    if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                escribirLetraCorrecta(i)
            };            
        }
    }else{
        anadirLetraCorrecta(letra)
        escribirLetraIncorrecta(letra,errores)
        }

    switch (errores) {
        case 8:
            break
        case 7: dibujarPrimerTrazo()
                dibujarSegundoTrazo()
            break
        case 6: dibujarTercerTrazo()
            break
        case 5: dibujarCuartoTrazo()
            break
        case 4: dibujarQuintoTrazo()
             break
        case 3: dibujarSextoTrazo()
             break
         case 2: dibujarSeptimoTrazo()
             break
         case 1: dibujarOctavoTrazo()
             break
         case 0: dibujarNovenoTrazo()
         alert("lo siento perdio el juego");
         break
         default: confirm("Volver a Jugar")
         }
    }
    }

    
