
const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51JptKupcHL._SL1500_.jpg',
            price: 19.99,
            description: 'A soft pillow!'
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://www.ulcdn.net/images/products/84856/slide/1332x726/Sardis_Hand_Tufted_Carpet_Prussian_Blue_01.jpg?1460616256',
            price: 89.99,
            description: 'A carpet which you might like - or not.'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}"> 
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p> 
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();
