// const products = []
// async function GetProducts() {
//     try{
//         const res = await fetch('https://dummyjson.com/products')
//         const prod = await res.json()
//         console.log(prod)

//         let str = ``
//         prod.products.forEach(product => {
            
            // str+= `<a href="./proddetails.html?id=${product.id}">
            //     <div class="card">
            //         <img src="${product.thumbnail}" alt="img">
            //         <div class="title">
            //             ${product.title}
            //         </div>
            //         <div class="price">
            //             $${product.price}
            //         </div>
            //     </div>
            //     </a>`
//             console.log(product)

//         });
//         document.querySelector('.cards').innerHTML = str

//     }
//     catch (error){
//         console.log(`error found ${error}`)
//     }
// }

// GetProducts()

const products = [];

async function GetProducts() {
    try{
        const res = await fetch('https://dummyjson.com/products');
        const prod = await res.json();

        products.push(...prod.products)

        renderProducts(products);
    }
    catch (error){
        console.log(`error found ${error}`)
    }
}

function renderProducts(list){
    let str =``

    list.forEach(product => {
        str += `
        <a href="./proddetails.html?id=${product.id}">
        <div class="card">
            <img src="${product.thumbnail}" alt="img">
            <div class="title">
                ${product.title}
            </div>
            <div class="price">
                $${product.price}
            </div>
        </div>
        </a>`;
    });
    document.querySelector('.cards').innerHTML = str;
}

document.querySelector('.search').addEventListener('input',e => {
    const keyword = e.target.value.toLowerCase();

    const filtered = products.filter(p => 
        p.title.toLowerCase().includes(keyword)
    );

    renderProducts(filtered)
});

GetProducts();