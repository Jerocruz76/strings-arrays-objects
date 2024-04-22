let pass = prompt("Ingrese su contraseña: ")
results(pass)
  
alert(pass)
function passwordValidation(pass) {
    // Expresiones regulares
    const regexLenght = /.{8,}/.test(pass)
    const regexNumber = /[0-9]/.test(pass)
    const regexLetter = /[a-zA-Z]/.test(pass)
    const regexCharacter = /[!@#$%^&*()_+=-{}\[\]:;\"'<>,./|\~`]/.test(pass)

    // Condiciones validadas
    const validLenght = regexLenght.test(pass)
    const validNumber = regexNumber.test(pass)
    const validLetter = regexLetter.test(pass)
    const validCharacter = regexCharacter.test(pass)

    let validConditions = 0
    if (regexLenght) validConditions++
    console.log(validConditions)
    if (regexNumber) validConditions++
    console.log(validConditions)
    if (regexLetter) validConditions++
    console.log(validConditions)
    if (regexCharacter) validConditions++
    console.log(validConditions)
    
    // Condicional de contraseña segura
    if (validConditions === 4) {
    return true
    } else {
    return false
    }
}
  
function results(pass) {
    const isValid = passwordValidation(pass)
    
    if (isValid) {
    alert("Contraseña segura")
    } else {
    alert("Contraseña insegura")
    const invalidConditions = []
    
    if (!isvalidLenght) invalidConditions.push("al menos 8 caracteres")
    if (!regexNumber) invalidConditions.push("al menos un número")
    if (!regexLetter) invalidConditions.push("al menos una letra")
    if (!regexCharacter) invalidConditions.push("al menos un caracter especial (!@#$%^&*()_+=-{}\[\]:\"'<>,./|\~`")
    
    alert("Le faltan las siguientes condiciones:")
    invalidConditions.forEach(condition => alert(`- ${condition}`))
    }
}
  