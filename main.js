let cart = []
let foodCategories = []
let products = []

fetch("https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json")
    .then(data => data.json().then(content => {
        foodCategories = content;
        foodCategories.forEach(category => {
            let section = document.getElementById(category.name + "Menu");
            category.products.forEach(product => {
                addProduct(product, section);
                products.push(product);
            })
        });
    }));

function addProduct(product, section) {
    section.innerHTML += `
        <div class="col-3 space">
        <div class="card h-100">
        <img class="card-img-top" src="${product.image}" alt="${product.name}">
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text"><strong>$${product.price}</strong></p>
        <a href="#" class="btn btn-dark" onclick="addToCart('${product.name}');">Add to cart</a>
        </div>
        </div>
        </div>`;
}

function addToCart(param){
    let food = products.find((producto) => producto.name === param);
    cart.push(food)
    document.getElementById("item-cart").innerHTML = "Items " + cart.length;
}


function viewCart(){
    document.getElementById("myTabContent").style.display='none';
    document.getElementById("order").style.display='block';
    
    let mycart = Array.from(new Set(cart));
    let total = 0;
    let i = 0;

    mycart.forEach((producto) => {

    let count = () => {
        let counting = 0;
        cart.forEach((item) =>{
            if (item.name === producto.name) {
                counting++;
            }
        });
        return counting;
    }
    let tabla = document.getElementsByClassName("body-table")[0];
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
        
    item.innerHTML = ++i;
    qty.innerHTML = count();
    description.innerHTML = producto.name;
    unitp.innerHTML = producto.price;
    amountP = producto.price * count();
    total += amountP;
    amount.innerHTML = amountP.toFixed(2);

  });
  document.getElementById("total").innerHTML = `Total $${total.toFixed(2)}`;

    
}

function receipt() {
    viewMenu();
    cart.forEach((product) => {
        console.log("jkfljfkg")
    });
    
}

function viewMenu(){
    document.getElementById("myTabContent").style.display='block';
    document.getElementById("order").style.display='none';
    cleanOrders();
}

function cleanOrders() {
    let row = document.getElementsByClassName("body-table")[0];
    while (row.firstChild) {
      row.removeChild(row.firstChild);
    }
  }

function emptyCart() {
    cart = [];    
    document.getElementById("item-cart").innerHTML = "Items " + 0;
    cleanOrders()
    viewMenu()
    alert("Your order was canceled, the cart is now empty");

}


  
 
   
  