// 1: piedra 2: papel 3: tijera
function seleccion(op, pl) {
    let msj = "Elegiste "
    
    if (pl == false) {
        msj = "PC elige "
    }

    if(op == '1'){
        msj += "🥌"
    }else if(op == '2'){
        msj += "📃"
    }else if(op == '3'){
        msj += "✂"
    }else{
        msj = "Opcion no valida, perdiste"
    }           

    return msj
}
function enfrentamiento(p1, p2) {
    let resultado = ""

    if (p1 == p2){
        resultado = "Empate!!"
    }else if(p1 == '1' && p2 == '3' ){
        resultado = "Ganaste!!"
    }else if (p1 == '2' && p2 == '1'){
        resultado = "Ganaste!!"
    }else if (p1 == '3' && p2 == '2'){
        resultado = "Ganaste!!"
    }else{
        resultado = "Perdiste :c"
    }

    alert(resultado)
    return resultado
}
function pc_sel() {
    let max = 3
    let min = 1

    return Math.floor(Math.random()*(max-min+1)+min)
}
function juego() {
    let  jugador = 0
    let victorias = 0
    let derrotas = 0
    let resultado = ""
    while (victorias < 3 && derrotas < 3) {
        jugador = prompt("1> piedra\n2> papel\n3> tijeras")
        let pc = pc_sel()
        alert(seleccion(jugador, true))
        alert(seleccion(pc, false))
        resultado = enfrentamiento(jugador,pc)
        
        if (resultado == "Ganaste!!"){
            victorias++
        }else if (resultado == "Perdiste :c"){
            derrotas++
        }
        alert(`Has ganado ${victorias} veces\nHas perdido ${derrotas} veces`)
    }    
}

juego()