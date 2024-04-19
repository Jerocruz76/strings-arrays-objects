let userName = prompt("Ingresa tu nombre y tu apellido").toLowerCase();
var splitedArray = userName.split(" ");
console.log(splitedArray)
splitedArray.forEach(Element => {
    console.log(Element.slice(0,3))
    return Element.slice(0,3)
});

