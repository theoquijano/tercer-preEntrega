let puntosUsuario = 0
let puntosPC = 0

let instrucciones = document.querySelector("#instrucciones")
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario")
let contenedorPuntosPC = document.querySelector("#puntos-computadora")
let mensaje = document.querySelector("#mensaje")
let contenedorGanaPunto = document.querySelector("#gana-punto")
let elegiTuArma = document.querySelector("#elegi-tu-arma")

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario")
let contenedorEleccionPC = document.querySelector("#eleccion-computadora")

let botonesArmas = document.querySelectorAll(".arma")
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno)
})

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3)
    let eleccionUsuario = e.currentTarget.id

    eleccionPC === 0 ? eleccionPC = "piedra🪨" :
    eleccionPC === 1 ? eleccionPC = "papel📋" :
    eleccionPC === 2 ? eleccionPC = "tijera✂️" : ''

    if (
        (eleccionUsuario === "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📋") ||
        (eleccionUsuario === "papel📋" && eleccionPC === "piedra🪨")
    ) {
        ganaUsuario()
    } else if (
        (eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📋") ||
        (eleccionPC === "papel📋" && eleccionUsuario === "piedra🪨")
    ) {
        ganaPC()
    } else {
        empate()
    }

    mensaje.classList.remove("disabled")
    contenedorEleccionUsuario.innerText = eleccionUsuario
    contenedorEleccionPC.innerText = eleccionPC

    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "🔥 ¡Ganaste el juego! 🔥"
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡La computadora ganó el juego! 😭"
        }

        elegiTuArma.classList.add("disabled")
        reiniciar.classList.remove("disabled")
        reiniciar.addEventListener("click", reiniciarJuego)
    }


}