function ganaUsuario() {
    puntosUsuario++
    contenedorPuntosUsuario.innerText = puntosUsuario
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPC() {
    puntosPC++
    contenedorPuntosPC.innerText = puntosPC
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled")
    elegiTuArma.classList.remove("disabled")
    mensaje.classList.add("disabled")

    puntosUsuario = 0
    puntosPC = 0
    
    contenedorPuntosUsuario.innerText = puntosUsuario
    contenedorPuntosPC.innerText = puntosPC

    instrucciones.innerText = "El primero en llegar a 5 puntos gana."
}