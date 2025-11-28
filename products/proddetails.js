const params = new URLSearchParams(location.search)
const id = params.get("id")

async function ProductDetail(id) {
    try{
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        console.log(data)

        image = data.thumbnail

        let str = `<div class="product-image">
                <img src="${image}" alt="Essence Mascara Lash Princess">
            </div>

            <div class="product-info">
                <h2 class="product-title">${data.title}</h2>
                <p class="product-brand">Brand: <strong>${data.brand}</strong></p>
                <p class="product-category">${data.category}</p>
                <p class="product-description">${data.description}</p>
                <div class="product-meta">
                <p><strong>Price:</strong>${data.price}</p>
                <p><strong>Discount:</strong>${data.discountPercentage}%</p>
                <p><strong>Rating:</strong> ${data.rating}</p>
                <p><strong>Stock:</strong>${data.stock}</p>
                <p><strong>Status:</strong>${data.status}</p>
                </div>

                <button class="buy-btn">Buy Now</button>
            </div>
        </div>`

        document.querySelector('.product').innerHTML = str

    }
    catch (error){
        console.log(`error found ${error}`)
    }
}

ProductDetail(id)