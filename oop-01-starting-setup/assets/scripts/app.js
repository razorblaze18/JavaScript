class Product {
    // title = 'DEFAULT'; //In classes, always use "=" instead of ":" and always end the line with ";". And this is the main difference between Classes and Objects.
    // imageUrl;
    // description;
    // price;
    //All Above are class FIELDS.

    constructor(title, image, desc, price) {
        this.title = title;//All these are class property
        this.imageUrl = image;//Property..
        this.description = desc;//Property..
        this.price = price;//Property.
    }
    // someName() {} //This is the way to add METHOD. 
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}"> 
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p> 
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            return prodEl;
    }
}

class ProductList {
    products = [
        new Product('A Pillow',
            'https://images-na.ssl-images-amazon.com/images/I/51JptKupcHL._SL1500_.jpg',
            'A soft pillow!',
            19.99),
        new Product('A Carpet',
            'https://www.ulcdn.net/images/products/84856/slide/1332x726/Sardis_Hand_Tufted_Carpet_Prussian_Blue_01.jpg?1460616256',
            'A carpet which you might like - or not.',
            89.99)
        //IMP. Always add the keyword "new" infront of the function which you want to execute. "new" is the keyword which JavaScript understands, that together with such a function execution which is based on a class, should basically create a new object.

    ];

    constructor() { }

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
                const productItem = new ProductItem(prod);
                const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }

}

const productList = new ProductList();
productList.render();