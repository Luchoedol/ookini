// datos de la condicion
const cupoCata = 8;
const inscritos = 2;

// condicion de cata abierta o llena

if(cupoCata > inscritos){
    console.log("Aún hay cupo para la cata de café");
} else {
    console.log("Lo siento, la cata de café está llena");
}

const cantidadTazas = 5;
if(cantidadTazas > 2){
    console.log("Solo puedes reservar maximo 2 tazas");
} else {
    console.log("Hay tazas disponibles");
}