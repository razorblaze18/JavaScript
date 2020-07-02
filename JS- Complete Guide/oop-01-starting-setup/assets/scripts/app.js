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


} class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if (shouldRender){
            this.render();
        };
    }

    render() {}

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
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
        const sum = this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0
        );//Reduce always takes two arguements. IF the array is empty it will automatically return the inital value which is zero.
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId)
    }

    addProduct(products) {
        const updatedItems = [...this.items];
        updatedItems.push(products);
        this.cartItems = updatedItems;
    }

    orderProducts() {
        console.log('Ordering...');
        console.log(this.items);
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        const orderButton = cartEl.querySelector('button');
        orderButton.addEventListener('click', () => this.orderProducts());//Since arrow functions don't know this, will not be bound what the event listener wants to bind it because arrow function ignores this.
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component {
    constructor(products, renderHookId) {
        super(renderHookId, false);
        this.products = products;
        this.render();
    }

    addToCart() {
        App.addProductToCart(this.products);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
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

class ProductList extends Component {
    products = [];

    constructor(renderHookId) {//This is known as Method.
        super(renderHookId);
        this.fetchProducts();
    }

    fetchProducts() {
        this.products = [
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
        this.renderProducts();
    } 

    renderProducts() {
        for (const prod of this.products) {
            new ProductItem(prod, 'prod-list');
        }
    }

    render() {

        this.createRootElement('ul', 'product-list',
         [new ElementAttribute('id', 'prod-list')
        ]);
         if (this.products && this.products.length > 0) {
             this.renderProducts();
         }
       
    }
}

class Shop {
    constructor() {
        this.render();
    }

    render() {
        this.cart = new ShoppingCart('app');
        new ProductList('app');
    }
}

class App {
    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductToCart(products) {
        this.cart.addProduct(products);
    }
}

App.init();



