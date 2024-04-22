
const objUsuario = {}

while(confirm("Pulsa aceptar para continuar y cancelar para salir")){
    const nombre = prompt("Ingresa tu nombre y apellido").toLowerCase()

    const array = nombre.split(" ")
    console.log(array)

    let user = array[0].slice(0,3)+array[1].slice(0,3)
    let count = 0

    const userKeys = Object.keys(objUsuario)
    userKeys.forEach(i => {
        if(i.includes(user)){
            count++

        }
    })
    if(count>0){
        user = user+count
    }

    const domain = "@myDomain.com"
    const correo = user + domain
    Object.assign(objUsuario,{
        [user]:correo
    })
    
    console.log(objUsuario)
}    













