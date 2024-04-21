
let userObj = {}
const userNames = []
const usersList2 = []

const domain = "@myDomain.com"

while(confirm("Deseas agregar un usuario?")){
    
    let userName = prompt("Ingresa tu nombre y tu apellido").toLowerCase();
    let splitedArray = userName.split(" ");
    let cominedName = ''
    splitedArray.forEach(Element => {
        let elementSlice = Element.slice(0,3)
        
        cominedName += elementSlice
    }); 
    userNames.push(cominedName)
    let usuarioCompleto = userNames.map(function(user){
        return user + domain
    })
    let objUnico = {}

    userNames.forEach((element, idx) => {
        objUnico = {
            [element]: usuarioCompleto[idx]
        }
        
    }); 
    objUnico={

        [userNames[userNames.length-1]] : usuarioCompleto[usuarioCompleto.length-1] 
    }
    usersList2.push(objUnico)
    console.log(usersList2)
    
}



console.log(userObj)
console.log(userNames)
console.log(usersList2)




/* let isIncluded = keys.includes(usuario)
    console.log(isIncluded)
    if (isIncluded=true){
        let nuevoUsuario = usuario + '1'
        alert(`Este usuario ya está en uso, te recomiendo usar: ${nuevoUsuario}`)
    } */





