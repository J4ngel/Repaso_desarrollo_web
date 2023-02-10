let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3
const ataques = ["FUEGO", "AGUA", "TIERRA"]

function reiniciarJuego() {
    location.reload()
}

function mensajeFinal(resultado) {
    let seccionReiniciar = document.getElementById("reiniciar")

    let btnFuego = document.getElementById("btn-fuego")
    let btnAgua = document.getElementById("btn-agua")
    let btnTierra = document.getElementById("btn-tierra")

    let seccionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement('p')

    if(resultado){
        parrafo.innerText = `Ganaste el combate, la mascota enemiga no puede continuar`
    }else{
        parrafo.innerText = `Perdiste el combate, tu mascota no puede continuar`
    }

    btnFuego.disabled = true
    btnAgua.disabled = true
    btnTierra.disabled = true
    seccionMensajes.appendChild(parrafo)
    seccionReiniciar.style.display = 'block'
}

function revisarVidas() {
    if (vidaEnemigo == 0){
        mensajeFinal(true)
    }else if (vidaJugador == 0){
        mensajeFinal(false)
    }
}

function enfrentamiento() {
    let spanVidasJugador = document.getElementById("vida-jugador")
    let spanVidasEnemigo = document.getElementById("vida-enemigo")

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("Empate ⚔")
    }else if(ataqueJugador == ataques[0] && ataqueEnemigo == ataques[2]){
        crearMensaje("Ganaste!! 🐱‍👤")
        vidaEnemigo--
        spanVidasEnemigo.innerText  = vidaEnemigo
    }else if(ataqueJugador == ataques[1] && ataqueEnemigo == ataques[0]){
        crearMensaje("Ganaste!! 🐱‍👤")
        vidaEnemigo--
        spanVidasEnemigo.innerText  = vidaEnemigo
    }else if(ataqueJugador == ataques[0] && ataqueEnemigo == ataques[2]){
        crearMensaje("Ganaste!! 🐱‍👤")
        vidaEnemigo--
        spanVidasEnemigo.innerText  = vidaEnemigo
    }else{
        crearMensaje("Perdiste!! 💩")
        vidaJugador--
        spanVidasJugador.innerText  = vidaJugador
    }

    revisarVidas()
}

function crearMensaje(resultado) {
    let seccionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement('p')
    parrafo.innerText = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} -> ${resultado}`

    seccionMensajes.appendChild(parrafo)
}

function aleatorio(max, min) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

function getAtaqueEnemigo() {
    let index = aleatorio((ataques.length-1) ,0)
    ataqueEnemigo = ataques[index]
    enfrentamiento()
}

function ataqueFuego() {
    ataqueJugador = ataques[0]
    getAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = ataques[1]
    getAtaqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = ataques[2]
    getAtaqueEnemigo()
}

function getMascotaEnemiga() {
    let mascotaSeleccionada = ""
    let grupoMascotas = document.getElementsByName('mascota')
    let spanMascotaEnemiga = document.getElementById("mascota-enemigo")
    let spanVidaEnemiga = document.getElementById("vida-enemigo")
    let index = Math.floor(Math.random() * (grupoMascotas.length))
    
    mascotaSeleccionada = grupoMascotas[index].id
    spanMascotaEnemiga.innerHTML = mascotaSeleccionada
    spanVidaEnemiga.innerHTML = vidaEnemigo
}

function selMascota() {
    let seccionElegirMascota = document.getElementById("seleccionar-mascota")
    let seccionAtaque = document.getElementById("seleccionar-ataque")
    let seccionMensajes = document.getElementById("mensajes")

    let mascotaSeleccionada = ""
    let grupoMascotas = document.getElementsByName('mascota')
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    let spanVidaJugador = document.getElementById("vida-jugador")

    grupoMascotas.forEach(mascota => {
        let inputMascota = document.getElementById(mascota.id)
        if(inputMascota.checked){
            mascotaSeleccionada = mascota.id
        }
    })

    if (mascotaSeleccionada.length) {
        seccionElegirMascota.style.display = 'none'
        seccionAtaque.style.display = 'block'
        seccionMensajes.style.display = 'block'

        spanMascotaJugador.innerText = mascotaSeleccionada
        spanVidaJugador.innerText = vidaJugador
        getMascotaEnemiga()
    }else{
        alert("Usted no seleccionó ninguna mascota, por favor selecciona una")
    }
}

function iniciarJuego() {
    let seccionAtaque = document.getElementById("seleccionar-ataque")
    let seccionMensajes = document.getElementById("mensajes")
    let seccionReiniciar = document.getElementById("reiniciar")

    let btnMascota = document.getElementById("btn-mascota")
    let btnFuego = document.getElementById("btn-fuego")
    let btnAgua = document.getElementById("btn-agua")
    let btnTierra = document.getElementById("btn-tierra")
    let btnReset =  document.getElementById("btn-reset")

    seccionAtaque.style.display = 'none'
    seccionMensajes.style.display = 'none'
    seccionReiniciar.style.display = 'none'

    btnMascota.addEventListener('click', selMascota)
    
    btnFuego.addEventListener('click', ataqueFuego)
    btnAgua.addEventListener('click', ataqueAgua)
    btnTierra.addEventListener('click', ataqueTierra)

    btnReset.addEventListener('click', reiniciarJuego)
}

window.addEventListener('load', iniciarJuego)