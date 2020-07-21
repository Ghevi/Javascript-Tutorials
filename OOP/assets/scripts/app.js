class Product {
  title = "DEFAULT";
  imageUrl;
  price;
  description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }

    // the this will refer to the object that is being created
    // not this base class unless we do new Component()
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
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevVal, curItem) => prevVal + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId); // calls the constructor in the parent class, must be first here
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;

    // This was fine, changed just to show get and set use
    // this.items.push(product);
    // this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    // const cartEl = document.createElement("section");
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    // cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    // return cartEl;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);

    // console.log("Adding product to cart...");
    // console.log(this.product);
  }

  render() {
    // const prodEl = document.createElement("li");
    // prodEl.className = "product-item";
    const prodEl = this.createRootElement("li", "product-item");
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
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this)); // without bind(this) we get undefined
    // return prodEl;
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
      new Product(
        "A Pillow",
        "https://www.downetc.com/media/catalog/product/cache/4c0ee9c259e8813fe6f171ce41105c1f/g/o/goose_down_pillow_rhapsody.jpg",
        19.99,
        "A soft pillow"
      ),
      new Product(
        "A Carpet",
        "https://www.fatboy.com/assets/image/000/000/124/fatboy-non-flying-carpets-paprika.png",
        89.99,
        "A carpet that will make you fly"
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);

    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }

    // const renderHook = document.getElementById("app");
    // const prodList = document.createElement("ul");
    // prodList.id = "prod-list";
    // prodList.className = "product-list";

    //const productItem = new ProductItem(prod, "prod-list");
    // productItem.render();
    // const prodEl = productItem.render();
    // prodList.append(prodEl);
  }
  // return prodList;
}

class Shop {
  constructor() {
    this.render();
  }

  // cart; // can be omitted because this.cart automatically create this property

  render() {
    this.cart = new ShoppingCart("app");
    new ProductList("app");

    // this.cart = new ShoppingCart("app");
    // const productList = new ProductList('app');

    // const renderHook = document.getElementById("app");
    // const cartEl = this.cart.render();
    // this.cart.render();
    // productList.render();
    // renderHook.append(cartEl);
    // renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    // shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
