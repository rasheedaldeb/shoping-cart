const products = [
    {
        id: 0,
        image: './assets/img/product-1.jpg',
        title: "red T-shirt",
        price: 150
    },
    {
        id: 1,
        image: "./assets/img/product-2.jpg",
        title: "black shoes",
        price: 80
    },
    {
        id: 2,
        image: "./assets/img/product-3.jpg",
        title:"socks",
        price: 100
    },
    {
        id: 3,
        image: "./assets/img/product-4.jpg",
        title:"watch",
        price: 120
    }
]
localStorage.setItem("productData", JSON.stringify(products))