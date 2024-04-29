let i = true
const arrayProduct = []
let productCont = 1

function createProduct(){
    const productName = prompt("Ingresa el nombre del producto").toLowerCase()
    const productPrice = Number(prompt("Ingresa el precio del producto"))
    const productQuantity = Number(prompt("Ingresa la cantidad del producto"))
    const productDescription = prompt("Ingresa la descripción del producto")
    const product = {
        id: productCont++,
        nombre: productName,
        precio: productPrice,
        cantidad: productQuantity,
        descripcion: productDescription
    }
    arrayProduct.push(product)
    alert("El producto fué agregado")
}

function duplicateProduct(){
    const productToDuplicate = Number(prompt("Ingrese el id del producto que desea duplicar"))
    const productCopy ={...arrayProduct[productToDuplicate]}
    arrayProduct.push(productCopy);
}

function searchAndVisualizeProducts(){
    const promptToSee = Number(prompt("Ingresa 1 para ver todos los productos, 2 para buscar un producto por nombre o 3 para buscar un rango de productos por precio"))
    if(promptToSee === 1){
        alert(`Los productos son los siguientes ${JSON.stringify(arrayProduct)}`)
    }else if(promptToSee === 2){
        const productNameToSearch = prompt(`Ingresa el nombre del producto que deseas buscar`).toLowerCase()
        let findName = arrayProduct.find(e => e.nombre === productNameToSearch)
        if(findName){
            alert(JSON.stringify(findName))
        }else{
            alert("Este producto no ha sido agregado")
        }
    }else if(promptToSee === 3){
        const productPriceToSearch = Number(prompt("Ingresa el precio de el o los productos que deseas ver"))
        let findPrice = arrayProduct.find(e=>e.precio === productPriceToSearch)
        if(findPrice){
            alert(JSON.stringify(findPrice))
        }else{
            alert("Ningún producto tiene éste precio")
        }
    }
}

function uploadProducts(){
    const productToUpload = Number(prompt("Ingresa el id del producto que deseas actualizar"))
    let findId = arrayProduct.find(e => e.id === productToUpload)
    if(findId){
        let newName = prompt("Ingrese el nuevo nombre")
        findId.nombre = newName
        let newPrice = prompt("Ingrese la nueva fecha")
        findId.precio= newPrice
        let newDescription = prompt("Ingresa una nueva descripción")
        findId.descripcion = newDescription
        let newQuantity = parseInt("Ingresa la cantidad de este producto")
        findId.cantidad = newQuantity
    }else{
        alert("Producto no agregado aún")
    }
}

function deleteProduct(){
    const productToDelete = prompt("Ingresa el nombre del producto que deseas eliminar").toLowerCase()
    arrayProduct = arrayProduct.filter(e => e.nombre !== productToDelete)
    alert("Evento eliminado")
}

function sellProduct(){
    const productToSell = prompt("Ingresa el nombre del produto que deseas vender")
    const findProduct = arrayProduct.find(e => e.nombre === productToSell)
    if(findProduct){
        const productToSellQuantity = Number(prompt("Ingresa la cantidad del producto que vas a vender"))
        // let quantity = arrayProduct.find(e => e.cantidad -= productToSellQuantity)
        if(productToSellQuantity > findProduct.cantidad){
            alert("No tienes tanta cantidad")
        }else if(productToSellQuantity < 0){
            alert("Cantidad inválida")
        }else{
            findProduct.cantidad -= productToSellQuantity
        }
    }
}

