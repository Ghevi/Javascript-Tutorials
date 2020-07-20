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

const productList = {
  products: [
    new Product(
      "A Pillow",
      "https://www.downetc.com/media/catalog/product/cache/4c0ee9c259e8813fe6f171ce41105c1f/g/o/goose_down_pillow_rhapsody.jpg",
      19.99,
      "A soft pillow"
    ),
    new Product(
      "A Carpet",
      "https://lh3.googleusercontent.com/proxy/yyBF6zNhoS1wmw0HFbbatqPmSsnwcc9hn5ZRjNNI1RuTpd4pRDo-e8-hPLzo1r5RrYFV2rI73XdKaYP-_C3ZygW6o4rdO7i71WTB6WHio31Nt3ehJVH0ntTf",
      89.99,
      "A carpet that will make you fly"
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
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
  },
};

productList.render();
