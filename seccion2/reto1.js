
let notas = prompt("Ingresa las notas del 1 al 100 separadas por comas:")

let arrayNotas = notas.split(",")
arrayNotas = arrayNotas.map(num => parseInt(num))

const promedio = arrayNotas.reduce((e,n) => e+n/arrayNotas.length, 0)

alert(`El promedio de las notas es ${promedio}`)