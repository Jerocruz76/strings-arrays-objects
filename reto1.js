const first3UserList = []
let userObj = {}

const domain = "@myDomain.com"

while(confirm("Deseas agregar un usuario?")){
    let userName = prompt("Ingresa tu nombre y tu apellido").toLowerCase(); // juan perez
    var splitedArray = userName.split(" "); // ["juan", "perez"]
    splitedArray.forEach(Element => {
        let elementSlice = Element.slice(0,3)
        first3UserList.push({
            letters3Element: elementSlice
        })
    });
    let usuario = first3UserList.join("") // [nombre, apellido] -> nombreapellido, nombreapellido nombreapellido, 
    let userEmail = usuario.concat(domain) // nombreapellido@myDomain.com
    userObj = {
        [userEmail] : usuario
    }// userObj user : userEmail 
    const keys = Object.keys(userObj) // users
    console.log(first3UserList);
    keys.forEach(e => console.log(e))
    console.log(usuario)
    /* let isIncluded = keys.includes(usuario)
    console.log(isIncluded)
    if (isIncluded=true){
        let nuevoUsuario = usuario + '1'
        alert(`Este usuario ya está en uso, te recomiendo usar: ${nuevoUsuario}`)
    } */
}





