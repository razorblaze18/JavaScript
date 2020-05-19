class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }


}class ElementAttribute{
    constructor(attrName, attrValue){
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId){
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes){
        const rootElement = document.createElement(tag);
        if(cssClasses){
            rootElement.className = cssClasses;
        }
        if(attributes && attributes.length > 0){
            for (const attr of attributes){
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) =>  prevValue + curItem.price, 0
        );//Reduce always takes two arguements. IF the array is empty it will automatically return the inital value which is zero.
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId)
    }

    addProduct(products){
        const updatedItems = [...this.items];
        updatedItems.push(products);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component {
    constructor(products) {
        this.products = products;
    }

    addToCart() {
        App.addProductToCart(this.products);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-items')
        prodEl.innerHTML = `
        <div>
            <img src ="${this.products.imageUrl}" alt="${this.products.title}">
            <div class="product-item__content">
                <h2>${this.products.title}</h2>
                <h3>\$${this.products.price}</h3>
                <p>${this.products.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://www.fairfieldstore.com/images/products/lrg/fairfield-store-ffi-108-s-down-alternative-eco-pillow_lrg.jpg',
            'A soft Pillow!',
            19.99
        ),

        new Product(
            'A Carpet',
            'https://assets.jassets.com/dpr_2/f_auto/fl_progressive/h_403,q_70,w_295/v1/assets/images/7721426/2018/11/1/d181034f-47b9-427f-98bf-875205ea8e3c1541052991414-IMPERIAL-KNOTS-CHARCOAL-TEAL-PERSIAN-HAND-TUFTED-CARPET-9651-1.jpg',
            'A carpet which you might like.',
            23.99
        )

    ];

    constructor() { }//This is known as Method.

    render() {
        
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(prodListEl);
    }
}

class App{
    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(products){
        this.cart.addProduct(products);
    }
}

App.init();



