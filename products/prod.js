const products = []
async function GetProducts() {
    try{
        const res = await fetch('https://dummyjson.com/products')
        const prod = await res.json()
        console.log(prod)

        let str = ``
        prod.products.forEach(product => {
            
            str+= `<a href="./proddetails.html?id=${product.id}">
                <div class="card">
                    <img src="${product.thumbnail}" alt="img">
                    <div class="title">
                        ${product.title}
                    </div>
                    <div class="price">
                        $${product.price}
                    </div>
                </div>
                </a>`
            console.log(product)

        });
        document.querySelector('.cards').innerHTML = str

    }
    catch (error){
        console.log(`error found ${error}`)
    }
}

GetProducts()