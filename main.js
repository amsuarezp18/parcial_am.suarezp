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
    section.innerHTML += `<div class="card col-3 my-3" style="max-width: 15.2rem; min-width: 15.2rem;">
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
    document.getElementById("item-cart").innerHTML = "Items " + cart.length;
    
    var tabla = document.getElementsByClassName("body-table")[0];
    var row = tabla.insertRow(-1);

    // Inserta un columna en la fila item
    var item = row.insertCell(0);
    // Inserta una columna en la fila qty
    var qty = row.insertCell(1);
    // Inserta una columna en la fila description
    var description = row.insertCell(2);
    // Inserta una columna en la fila unit price
    var unitp = row.insertCell(3);
    // Inserta una columna en la fila amount
    var amount = row.insertCell(4);

    item.innerHTML = "edrfghjk";
    qty.innerHTML = "edrfghjk";
    description.innerHTML = "edrfghjk";
    unitp.innerHTML = "edrfghjk";
    amount.innerHTML = "edrfghjk";
}

function viewCart(){
    document.getElementById("myTabContent").style.display='none';
    document.getElementById("order").style.display='block';
    

}

function viewMenu(){
    document.getElementById("myTabContent").style.display='block';
    document.getElementById("order").style.display='none';
}
