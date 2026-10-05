console.log("V60");
console.log("Kyoto drip");
console.log("Prensa Francesa");
console.log("Siphon");

// Lista de metodos, se llama array
const metodos = ["V60", "Kyoto drip", "Prensa Francesa", "Siphon"];
for (const x of metodos){
    console.log(x);
}
console.log("Fin de la lista de metodos")

const reservasDelDia = [2, 1, 2, 1, 2];
let totalTazas = 0;

for (const cantidad of reservasDelDia){
    totalTazas = totalTazas + cantidad;
}


console.log("Total de tazas reservadas del día:", totalTazas);