
let notas = prompt("Ingresa las notas de tus estudiantes del 1 al 100")

let arrayNotas = notas.split(",")
arrayNotas = arrayNotas.map(num => parseInt(num))

const promedio = arrayNotas.reduce((e,n) => e+n/arrayNotas.length, 0)

let numeroMayor = (Math.max(arrayNotas))
let numeroMenor = (Math.min(arrayNotas))

alert(`la nota más baja es ${numeroMenor}`)
alert(`la nota más alta es ${numeroMayor}`)

