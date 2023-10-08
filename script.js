const Products = [
  { id: 1, name: "Nike Sneakers", price: 1000 },
  { id: 2, name: "Adidas Shoes", price: 800 },
  { id: 3, name: "Denim sneakers shoes", price: 1300 },
];

let total = 0;
let cart_container = document.querySelector(".container_right");
let table_body = document.getElementById("table_body");
let plus = document.querySelector(".plus");
let emptyCart = document.querySelector(".table-container p");
let superscript= document.getElementById("superscript");
superscript.classList="superscript";
// Adding items to the cart
let product_list = document.querySelectorAll(".container-left .product");
product_list.forEach((val) => {
  // increasing product number by clicking on plus button
  let plus = val.querySelector(".plus");
  plus.addEventListener("click", () => {
    let items = val.querySelector("#items");
    if (items.innerText < 10) items.innerText = parseInt(items.innerText) + 1;
    let product_id = val.querySelector(".product_id").innerText;

    // Searching in Object according to Id
    Products.forEach((idx) => {
      if (items.innerText == 1 && parseInt(product_id) == idx.id) {
        addToCart(idx.id, idx.name, idx.price, items.innerText);
        totalSum(idx.price,items.innerText);
      } //if there is atleast no Of product is 1
      else if (parseInt(product_id) == idx.id) {
        let td2 = document.querySelector(`#data${idx.id}`);
        td2.innerText = `${items.innerText} x ${idx.price}`;
        totalSum(idx.price,items.innerText);
      }
      
    });
    //If any product is added
    if (table_body.children.length > 0) {
      emptyCart.innerText = "";
    }
    
  });

  //decreasing product number by clicking on minus button
  let minus = val.querySelector(".minus");
  minus.addEventListener("click", () => {
    let items = val.querySelector("#items");
    if (items.innerText >= 1) items.innerText = parseInt(items.innerText) - 1;
    let product_id = val.querySelector(".product_id").innerText;

    // Searching in Object according to Id
    Products.forEach((idx) => {
      if (items.innerText == 0 && parseInt(product_id) == idx.id) {
        removeFromCart(idx.id, idx.name, idx.price, items.innerText);
        subtract(idx.price);
        cartItems--;
        superscript.innerText=`${cartItems}`;
   
      } else if (parseInt(product_id) == idx.id) {
        let td2 = document.querySelector(`#data${idx.id}`);
        td2.innerText = `${items.innerText} x ${idx.price}`;
        subtract(idx.price);
      }
      
    });
    // If no Product is added
    if (table_body.children.length == 0) {
      emptyCart.innerText = "No Product added to the cart";
    }
  });
});

let i = 1;
// Function to add product in the cart only One time
function addToCart(id, product_name, product_price, no_of_items) {
  cartItems++;
  let row = document.createElement("tr");
  row.setAttribute("id", `row1-${id}`);
  let table_data = document.createElement("td");
  let table_data2 = document.createElement("td");
  table_data.innerText = `${product_name}`;
  table_data2.innerText = `${no_of_items} x ${product_price}`;
  table_data2.setAttribute("id", `data${id}`);
  console.log("row=" ,row);
  row.appendChild(table_data);
  console.log("row=" ,row);
  table_body.appendChild(row);
  row.appendChild(table_data2);
  console.log("row=" ,row);
  row.style.borderBottom = "2px dashed black";
  table_body.appendChild(row);
  superscript.innerText=`${cartItems}`;
}

// Function to remove product from the cart
function removeFromCart(id, product_name, product_price, no_of_items) {
  let deleteRow = document.querySelector(`#row1-${id}`);
  table_body.removeChild(deleteRow);
}
let cartItems=0;
let totalPrice = document.querySelector("#totalPrice");
function totalSum(price,totalItem) {
  if(totalItem<10){
  total += price;
  totalPrice.innerText = `${total}`;
}
}
function subtract(price ) {
  total -= price;
  totalPrice.innerText = `${total}`;
}


let cartItem=document.getElementById("cartItem")
let cart=document.querySelector(".cart");
cart.addEventListener("click",()=>{
  cartItem.style.display="block"
})
let close=document.querySelector(".close");
close.addEventListener("click",()=>{
  cartItem.style.display="none"
})