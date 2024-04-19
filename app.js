const listaVacia = []
const userObj = {}

const email = "@myDomain.com"

let confirmar = confirm("Deseas agregar un usuario?")

switch(confirmar==true){
    case 1:
        let userName = prompt("Ingresa tu nombre y tu apellido").toLowerCase();
    var splitedArray = userName.split(" ");
    console.log(splitedArray)
    splitedArray.forEach(Element => {
        let elementSlice = Element.slice(0,3)
        listaVacia.push(elementSlice)
    });
    let usuario = listaVacia.join("")
    let userEmail = usuario.concat(email)
    userObj [usuario] = {userEmail}
    console.log(userObj)
}



