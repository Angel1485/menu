function abrirJuego(juego) {
    if (juego === "cazando") {
        window.location.href = "https://juego-cazando-taupe.vercel.app/";
    } else if (juego === "limones") {
        window.location.href = "https://juego-limones-beta.vercel.app/";
    }
}

function simuladores(id) {
    if (id === "simulador") {
        window.location.href = "https://simulador-de-creditos-mu.vercel.app/";
    } else if(id === "comisiones"){
        window.location.href = "https://comisiones-delta.vercel.app/";
    }
}
