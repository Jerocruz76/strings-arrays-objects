let i = true
const arrayProduct = []
let productCont = 1
const blacklistedWords = ['puta', 'marica', 'guevon', 'mierda', 'chimba', 'carechimba', 'hijueputa', 'malparido', 'malparida']

function createProduct(){
    const productName = prompt("Ingresa el nombre del producto").toLowerCase()
    const productPrice = Number(prompt("Ingresa el precio del producto"))
    const productQuantity = Number(prompt("Ingresa la cantidad del producto"))
    const productDescription = prompt("Ingresa la descripción del producto")
    const nameArray = productDescription.split(" ")
    const product = {
        id: productCont++,
        nombre: productName,
        precio: productPrice,
        cantidad: productQuantity,
        descripcion: productDescription
    }
    arrayProduct.push(product)
    const newName =[];
    alert("El producto fué agregado")
    nameArray.forEach(e => {
        let word = e;
        blacklistedWords.forEach(badword => {
            if(badword===e){
                word='*'
            }
        });
        newName.push(word)
        alert("Aquí hay una mala palabra")
    })
    let stringNewName =''
    newName.forEach(element => {
        stringNewName += element;
        stringNewName += " "
    });
}

function duplicateProduct(){
    let duplicateCont = 1
    let newProduct = structuredClone(idDuplicate)
    newProduct.id = id++
    newProduct.nombre += " copy"
    arrayProduct.forEach(function(e){
        if(product.nombre == `${newProduct.name} ${duplicateCont}`){
            duplicateCont++
        }
    })
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
        const productToSellQuantity = parseInt(prompt("Ingresa la cantidad del producto que vas a vender"))
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

function buyProduct(){
    const productToBuy = prompt("Ingresa el nombre del producto dentro de tu lista que deseas comprar")
    const findProduct = arrayProduct.find(e => e.nombre === productToBuy)
    if(findProduct){
        const productToBuyQuantity = parseInt(prompt("Ingresa la cantidad del producto que vas a comprar"))
        findProduct.cantidad += productToBuyQuantity
    }else{
        alert("Aún no tienes éste producto")
    }
}

function calcInventoryPrices(){
    let total = arrayProduct.reduce((totalP,product)=>{
        return total + (product.precio * product.cantidad)
    })
    alert(`El total de los precios es ${total}`)
}

function orderProductsMaxMin(){
    const order = prompt("Ingresa el orden que deseas: 1. Mayor a menor 2. Menor a mayor")
    if(order === 1){
        arrayProduct = arrayProduct.sort((a, b) => b - a)
    }else if(order === 2){
        arrayProduct = arrayProduct.sort((a, b) => a - b)
    }else{
        alert("Esa no es una opción")
    }
}

while(i){
    const menu = parseInt(prompt(`Ingresa una opción:
                           \n 1. Agregar un producto
                           \n 2. Duplicar productos
                           \n 3. Visualizar productos
                           \n 4. Actualizar productos
                           \n 5. Eliminar producto
                           \n 6. Vender producto
                           \n 7. Comprar producto
                           \n 8. Total de precios en productos
                           \n 9. Ordenar productos
                           \n 10. Salir`))
    switch(menu){
        case 1:
            createProduct()
            break
        case 2:
            duplicateProduct()
            break
        case 3:
            searchAndVisualizeProducts()
            break
        case 4:
            uploadProducts()
            break
        case 5:
            deleteProduct()
            break
        case 6:
            sellProduct()
            break
        case 7:
            buyProduct()
            break
        case 8:
            calcInventoryPrices()
            break
        case 9:
            orderProductsMaxMin()
            break
        case 10:
            i = false
            break
        case undefined:
            alert("Esa no es una opción")
    }
}

