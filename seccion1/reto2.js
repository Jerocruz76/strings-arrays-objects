

function passwordValidation(pass) {
    // Expresiones regulares
    const regexLenght = new RegExp(/.{8,}/)
    const regexNumber = new RegExp(/[0-9]/)
    const regexLetter = new RegExp(/[a-z]/)
    const regexUpperCase = new RegExp(/[A-Z]/)
    const regexCharacter = new RegExp(/[!@#$%^&*()_+=-{}\[\]:;\"'<>,./|\~`]/)
    if (!regexLenght.test(pass)){
        alert("al menos 8 caracteres")
    }
    if (!regexNumber.test(pass)){
        alert("al menos un número")
    }
    if (!regexLetter.test(pass)){
        alert("al menos una minúscula")
    }
    if (!regexUpperCase.test(pass)){
        alert("al menos una mayúscula")
    }
    if (!regexCharacter.test(pass)){
        alert("al menos un caracter especial")
    }
}

function results(pass) {
    passwordValidation(pass)
}

let pass = prompt("Ingrese su contraseña: ")
results(pass)


