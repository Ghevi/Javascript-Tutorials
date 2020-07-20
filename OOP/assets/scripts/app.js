const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://www.downetc.com/media/catalog/product/cache/4c0ee9c259e8813fe6f171ce41105c1f/g/o/goose_down_pillow_rhapsody.jpg",
      price: 19.99,
      description: "A soft pillow",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://lh3.googleusercontent.com/proxy/yyBF6zNhoS1wmw0HFbbatqPmSsnwcc9hn5ZRjNNI1RuTpd4pRDo-e8-hPLzo1r5RrYFV2rI73XdKaYP-_C3ZygW6o4rdO7i71WTB6WHio31Nt3ehJVH0ntTf",
      price: 89.99,
      description: "A carpet that will make you fly",
    },
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
