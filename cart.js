// go to home function

function goToHome() {
      const cart = JSON.stringify(cartArry);
      localStorage.setItem('cartItem', cart);
      window.location = 'index.html'
}


let printname = document.getElementById('userprint');

// Retrieve user data from local storage
const storedUsers = JSON.parse(localStorage.getItem('user')) || [];

console.log(storedUsers);


// Check if there are stored users
 let dataa= 0
//  while (dataa < storedUsers.length){
//       console.log( `username ${storedUsers.username}`);
//  }
  
if (storedUsers.length > 0) {
      // Get the first user from the stored users
      const user = storedUsers[0];

      // Set the innerHTML of the element
      printname.innerHTML = `<i class="fa-solid fa-user fa-beat-fade"></i> Hi ${user.username}`;
      console.log(printname);
} else {
      // Handle the case when there are no stored users
      printname.innerHTML = 'No user found';
}



/// cart item varibales 

const div = document.querySelector('#add-Cart');
const data = localStorage.getItem('cartItem');
const cartArry = JSON.parse(data);
console.log(cartArry);



// cart  rander function start--------

function renderCart() {
      div.innerHTML = '';
      const totalpric = document.querySelector('#totalprice');
      let totalAmount = 0;
      // totalpric.innerHTML = ''
      if (cartArry.length > 0) {
            for (let i = 0; i < cartArry.length; i++) {
                  totalAmount += cartArry[i].price * cartArry[i].quantity
                  div.innerHTML += `<div class="main-mob"><h3>${cartArry[i].brand}</h3>
                  <img src="${cartArry[i].img}" class="image">
                  <h4>Model:${cartArry[i].model}</h4>
                  <h4>Ram:${cartArry[i].ram} Gb</h4>
                  <h4>Rom:${cartArry[i].rom}Gb</h4>
                  <h4>Camra:${cartArry[i].camera}</h4>
                  <h4>Price: ${cartArry[i].price}</h4>
                  <h4>TotlePrice: ${cartArry[i].price * cartArry[i].quantity}</h4>
                  <button class="increase" onclick="increaseQuantity(${i})">+</button>
                  <span class="quntity">${cartArry[i].quantity}</span>
                  <button class="decrease" onclick="decreaseQuantity(${i})">-</button> <br/>
                  <button  class="delete" onclick="deleteItem(${i})">Delete<i class="fa-solid fa-trash-can fa-fade"></i></button>
                  <button class="order">Order Now<i class="fa-brands fa-opencart fa-beat-fade"></i></button>
                  </div>`

            }

            totalpric.innerHTML = `Total Amount: RS ${totalAmount}`
      }


      else {
            div.innerHTML = '<h1 class="heading">NO Product Major..</h1>'
      }


}
// cart  rander function end--------


// call the  cart  rander function --------
renderCart()


// create a  increasquntity  function ------ 

function increaseQuantity(index) {
      div.innerHTML = ''
      console.log(cartArry[index])
      cartArry[index].quantity += 1
      renderCart()
}

// create a  decreasequntity  function ----------- 

function decreaseQuantity(index) {
      div.innerHTML = ''
      console.log(cartArry[index])
      cartArry[index].quantity -= 1
      renderCart()
      if (cartArry[index].quantity === 0) {
            div.innerHTML = ''
            cartArry.splice(index, 1)
            renderCart()
      }
}

// create a  delete cart  function ----------- 

function deleteItem(index) {
      div.innerHTML = '';
      cartArry.splice(index, 1);
      renderCart()
}


// create a  windows reload  function ----------- 
window.onbeforeunload = function () {
      localStorage.setItem('cartItem', JSON.stringify(cartArry));
};

