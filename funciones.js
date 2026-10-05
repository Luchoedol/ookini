function calcularPrecio(precioUnitario, cantidad) {
  const total = precioUnitario * cantidad;
  return total;
}
console.log(calcularPrecio(5,2));
console.log(calcularPrecio(3,4));

function puedeReservar(cantidad) {
  return cantidad <= 2;
}