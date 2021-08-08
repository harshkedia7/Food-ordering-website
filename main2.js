// PIZZA

let carts=document.querySelectorAll('.plus');

var products=[
  {
    name:"Baked pepperoni pizza",
    tag:"Baked beans",
    price:70,
    inCart:0,
    no:1
  },

  {
    name:"Baked tomato pizaa",
    tag:"cholula and hot peppers",
    price:49,
    inCart:0,
    no:2
  },

  {
    name:"Baked cheese cooking crust pizza",
    tag:"Potato salad and cheese",
    price:99,
    inCart:0,
    no:3
  },

  {
    name:"Pepperoni pizza with basil leaves",
    tag:"Mac and cheese",
    price:139,
    inCart:0,
    no:4
  },

  {
    name:"Pizza with brown wooden  ",
    tag:"Pullec pork and coleslaw",
    price:159,
    inCart:0,
    no:5
  },

  {
    name:"Pizza with green leaves",
    tag:"Brisket and Pulled pork",
    price:99,
    inCart:0,
    no:6
  },

  {
    name:"Pizza with red pepper and cheese",
    tag:"cheese and salad",
    price:139,
    inCart:0,
    no:7
  },

  {
    name:"Capsicum baked pizza",
    tag:"Hot chilly and pepper",
    price:199,
    inCart:0,
    no:8
  },
  {
    name:"Pepperoni pizza with onion",
    tag:"Cinnamom melt and ketchup",
    price:199,
    inCart:0,
    no:9
   }
  
];

for(let i=0;i<carts.length;i++)
{
  carts[i].addEventListener('click',()=>{
    cartNumbers(products[i]);
    totalCost(products[i]);
    
  });
}

function onLoadCartNumbers(){
  let productNumbers=localStorage.getItem('cartNumbers') ;
  productNumbers=parseInt(productNumbers);

  if(productNumbers){

      document.querySelector('.cart span').textContent=productNumbers;   
}
}

function cartNumbers(product){
        

 let productNumbers=localStorage.getItem('cartNumbers') ;
 productNumbers=parseInt(productNumbers);

 if(productNumbers){
  localStorage.setItem('cartNumbers',productNumbers+1);
 
  document.querySelector('.cart span').textContent=productNumbers + 1;
 }
 else{
  localStorage.setItem('cartNumbers',1);
  document.querySelector('.cart span').textContent=1;
 }
 
 setItems(product);
}

function setItems(product){


  let cartItems=localStorage.getItem('productsInCart');
         cartsItems= JSON.parse(cartItems);
  
   if(cartItems !=null){

    if( cartItems[product.name] ==undefined){
     
     cartItems ={
     cartItems,
       [product.name]:product
      }
    }
      cartItems[product.name].inCart +=1;
       
   }
   else {
       product.inCart=1;

       cartItems={
         [product.name]:product
       }
      }
       localStorage.setItem('productsInCart', JSON.stringify(cartItems));
       
 }

function totalCost(product){
  let cartCost=localStorage.getItem('totalCost');

  

  if(cartCost != null){
    cartCost=parseInt(cartCost);
    localStorage.setItem('totalCost',cartCost+product.price);
  }
  else{
    localStorage.setItem('totalCost',product.price);
  }
  }

 function displayCart(){
 

let cartItems=localStorage.getItem('productsInCart');
cartItems=JSON.parse(cartItems);
let cartCost=localStorage.getItem('totalCost');

let productContainer=document.querySelector('.products');

if(cartItems && productContainer){

   productContainer.innerHTML='';

  Object.values(cartItems).map(item =>{
     productContainer.innerHTML +=`
     <div class="product-title">
     <i class="fa fa-times-circle-o" aria-hidden="true"></i>
    <img src="./img/pizza/${item.no}.jpg" id="Cartimage"><br>
     <span>${item.name}</span>
     </div>
     <div class="price">${item.price}.00</div>
     <div class="quantity">
     <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
     <span> ${item.inCart}</span>
     <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
     </div>
     <div class="total">
     ${item.inCart * item.price}.00
     </div>
     
     `;
  });

  productContainer.innerHTML +=`
  <div class="basketTotalContainer">
   <h4 class="basketTotalTitle">
   Basket Total
   </h4>
   <h4 class="basketTotal">
   ${cartCost}.00
   </h4>
   
  `;
}

  }

 onLoadCartNumbers();
 displayCart();
if(document.readyState=='loading'){
  localStorage.clear();
} 