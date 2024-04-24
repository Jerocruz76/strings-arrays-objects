const email = prompt("Ingresa tu email")
listaEmail = []
listaEmail.push(email)
validarEmail()

function validarEmail(){
    if(listaEmail.includes('@.')|| listaEmail.includes('.@')||listaEmail.includes(" ")){
        alert("Correo inválido")}

}

function validarArroba(){
    return(listaEmail.includes('@'))
}