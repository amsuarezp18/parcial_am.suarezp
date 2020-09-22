let cart = []
let foodCategories = []
let products = []

fetch("https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json")
    .then(data => data.json().then(content => {
        foodCategories = content;
        foodCategories.forEach(category => {
            let section = document.getElementById(category.name + "Deck");
            category.products.forEach(product => {
                addProduct(product, section);
                products.push(product);
            })
        });
    }));

function addProduct(product, section) {
    section.innerHTML += `<div class="card col-3 my-3" style="max-width: 18rem; min-width: 18rem;">
    <img class="card-img-top" src="${product.image}" alt="${product.name}">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <p class="card-text"><strong>$${product.price}</strong></p>
      <a href="#" class="btn btn-dark" onclick="addToCar('${product.name}');">Add to cart</a>
    </div>
  </div>
</div>`;
}

function addToCar(param){
    cart.push(param)
    document.getElementById("item-cart").innerHTML = "Items";
    console.log(param)
}