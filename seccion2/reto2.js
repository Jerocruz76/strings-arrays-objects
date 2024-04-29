
let notas = prompt("Ingresa las notas de tus estudiantes del 1 al 100")

let arrayNotas = notas.split(",")
let arrayNotas2 = arrayNotas.map(num => Number(num))

const promedio = arrayNotas.reduce((e,n) => e+n/arrayNotas.length, 0)

console.log(arrayNotas2)

let numeroMayor = (Math.max(...arrayNotas2))
let numeroMenor = (Math.min(...arrayNotas2))

console.log(typeof(numeroMenor))

alert(`la nota más baja es ${numeroMenor}`)
alert(`la nota más alta es ${numeroMayor}`)
alert(`El promedio es ${promedio}`)

let contAprobados = 0
let contReprobados = 0

function aprobado(notas){
    if (notas >= 70){
        contAprobados++
    }
    else{
        contReprobados++
    }
}

for (let i = 0; i < arrayNotas2.length; i++){
    aprobado(arrayNotas2[i])
}

alert(`La cantidad de notas aprobadas es ${contAprobados}`)
alert(`La cantidad de notas reprobadas es ${contReprobados}`)

arrayNotas2 = arrayNotas2.sort((a, b) => b - a)

alert(`La lista de numeros ordenada de mayor a menor es ${arrayNotas2}`)

