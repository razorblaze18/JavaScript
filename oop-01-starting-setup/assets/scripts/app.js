const productList = {
    product: [
        {
        title: 'A Pillow',
        imageUrl: 'https://www.fairfieldstore.com/images/products/lrg/fairfield-store-ffi-108-s-down-alternative-eco-pillow_lrg.jpg',
        price: 19.99,
        description: 'A soft Pillow!'
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://assets.jassets.com/dpr_2/f_auto/fl_progressive/h_403,q_70,w_295/v1/assets/images/7721426/2018/11/1/d181034f-47b9-427f-98bf-875205ea8e3c1541052991414-IMPERIAL-KNOTS-CHARCOAL-TEAL-PERSIAN-HAND-TUFTED-CARPET-9651-1.jpg',
            price: 23.99,
            description: 'A carpet which you might like.',
        }
    ],
    render () {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.product){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src ="${prod.imageUrl}" alt="${prod.title}">
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