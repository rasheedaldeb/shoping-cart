let productData = JSON.parse(localStorage.getItem("productData"))
let cart = JSON.parse(localStorage.getItem("cartData")) || []
let cartData = localStorage.setItem("cartData", JSON.stringify(cart))
let root = document.getElementById("root")
let cartItem = document.getElementById("cartItem")
const displayProduct = ()=>{
    root.innerHTML = productData
    .map((item)=>{
        let {image, title, price, id} = item
        return (
            `<div class= "box">
            <div class="box-img">
            <img class="images" src="${image}">
            </div>
            <div class="button">
            <p>${title}</p>
            <h2>$${price}</h2>` +
            "<button onclick='addTocart("+
            id+")'>AddToCart</button>" +
            `</div>
            </div>`
        )
    })
    .join('')
}
const addTocart = (id)=>{
    cart.push({...productData[id]})
    console.log(id)
    localStorage.setItem("cartData", JSON.stringify(cart))
    displayCart()
}
const delElement = (j)=>{
    cart.splice(j, 1)
    localStorage.setItem("cartData", JSON.stringify(cart))
    console.log(j)
    document.getElementById("total").innerHTML = "$ 0.00" 
    displayCart()
}
const displayCart = ()=>{
    let total = 0
    let j = 0
    document.getElementById("count").innerHTML = JSON.parse(localStorage.getItem("cartData")).length
    if (cart.length == 0) {
        cartItem.innerHTML = "Your cart is empty"
    }else {
        cartItem.innerHTML = JSON.parse(localStorage.getItem("cartData")).map((element)=>{
            let {image, title, price } = element
            total= total + price
            document.getElementById("total").innerHTML = `$ ${total}`
            return (
                `<div class= "cart-item">
                <div class="row-img">
                <img class="rowImg" src="${image}">
                </div>
                <p style= font-size="12px">${title}</p>
                <h2 style= font-size="15px">${price}</h2>`+
                "<i class= 'fa-solid fa-trash' onclick='delElement(" +
            j++ +
            ")'></i></div>"
            )
        })
        .join(' ')
    }
}
displayProduct()
displayCart()