let a = true
let listaEvento = []
let idEvent = 1

function crearEvento(){
    let eventName = prompt("Ingresa el nombre del evento").toLowerCase()
    let date = prompt("Ingresa la fecha en formato: DD-MM-AAAA")
    let description = prompt("Ingresa la descripcion del evento").toLowerCase() 
    let evento = {
        id: idEvent++,
        nombre: eventName,
        fecha: date,
        descripcion: description
    }
    listaEvento.push(evento)
    alert("Evento agregado")
}

function visualizarEvento(){
    let opcionBusqueda = parseInt(prompt("Ingresa 1 para visualizar los eventos o 2 para buscar un evento por nombre"))
    if(opcionBusqueda === 1){
    alert(`Éstos son los eventos ${JSON.stringify(listaEvento)}`)
    }
    else if(opcionBusqueda === 2){
    let searchName = prompt("Ingresa el nombre del evento").toLowerCase()
    let findEvent = listaEvento.find(e => e.nombre === searchName)
    if(findEvent){
        alert(JSON.stringify(findEvent))
    }else{
        alert("Ese evento no ha sido creado")
    }

    }
}

function actualizarEvento(){
    let eventoActualizar = prompt("Ingrese el nombre del evento que desea actualizar").toLowerCase()
    let findName = listaEvento.find(e => e.nombre === eventoActualizar)
    if(findName){
        let newName = prompt("Ingrese el nuevo nombre")
        findName.nombre = newName
        let newDate = prompt("Ingrese la nueva fecha")
        findName.fecha = newDate
        let newDescription = prompt("Ingresa una nueva descripción")
        findName.descripcion = newDescription
    }else{
        alert("Este evento no ha sido creado aún")
    }
}

function eliminarEvento(){
    let eventoEliminar = prompt("Ingrese el nombre del evento que desea eliminar").toLowerCase()
    listaEvento = listaEvento.filter(e => e.nombre !== eventoEliminar)
}

while(a){
    const menu = parseInt(prompt(`Ingresa la opción que desees:
                        \n 1. Ingresar un nuevo evento
                        \n 2. Visualizar eventos o buscar evento por nombre
                        \n 3. Actualizar un evento
                        \n 4. Eliminar un evento
                        \n 5. Salir`))
    switch(menu){
        case 1:
            crearEvento()
            break
        case 2:
            visualizarEvento()
            break
        case 3:
            actualizarEvento()
            break
        case 4:
            eliminarEvento()
            break
        case 5:
            a = false
    }
}