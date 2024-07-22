
let shopping=document.getElementById("shopping")

let cardBtn=document.getElementById('card_btn')
let cardBtn2=document.getElementById('card_btn2')
let badge=document.querySelector(".badge")
let allProduct=document.querySelector('#products_section')

let products=[
    {
        id:1,
        title:"CRO collection",
        price:50,
        category:"Haircare products",
        imageUrl:"./img/4e9788cf10dda541f3a6eb4bc75734e9.jpg",
        quantity:1
,liked:false
,
added:false

    },
    {
        id:2,
        title:"Noura night cream",
        price:10,
        category:"Skincare products",
        imageUrl:"./img/e5fe1b2ca0e355bddae92769560c7358.jpg",
        quantity:1
,liked:false
,
added:false
    },
    {
        id:3,
        title:"Gold collection",
        price: 60,
        category:"Bodycare products",
        imageUrl:"./img/Labeau Organic _ Cosmética natural y orgánica.jpg",
        quantity:1
,liked:false
,
added:false
    },
    {
        id:4,
        title:"Wash With Water",
        price: 40,
        category:"For Babies",
        imageUrl:"./img/baby.jpg",
        quantity:1
,liked:false
,
added:false
    },
    {
        id:5,
        title:"Liquid Highlighter",
        price: 5,
        category:"Makeup",
        imageUrl:"./img/dbaf65745cc9a950c2ecf9592c4aea3f.jpg",
        quantity:1
,liked:false,
added:false
    },
    {
        id:6,
        title:"Rosmery oil",
        price: 20 ,
        category:"Oils",
        imageUrl:"./img/d452242e058d993cee96e116e33e3de6.jpg",
        quantity:1
,liked:false,
added:false
    },
    {
        id:7,
        title:"Laneige Lip sleeping mask",
        price: 5,
        category:"Lip products",
        imageUrl:"./img/7fb70201b90590a143d60221844a674b.jpg",
        quantity:1
,liked:false,
added:false
    },
    {
        id:8,
        title:"Hair clip",
        price: 2,
        category:" Accessories",
        imageUrl:"./img/61fa1580d751db0020ed4e8835468324.jpg",
        quantity:1,
        liked:false
        ,
added:false
    },
     
    {
        id:9,
        title:"Beautiful Rings",
        price: 8,
        category:" Accessories",
        imageUrl:"./img/8db3c73ff31e353f86fc0d4b2d9fd036.jpg",
        quantity:1,
        liked:false
        ,
added:false
    }

]
//////////////////////////////////////// search ///////////////////////////////////////


const searchInput = document.getElementById("search");

document.addEventListener("DOMContentLoaded", function() {
    drawItems();
  
    searchInput.addEventListener("input", function () {
        drawItems(); 
    });
});
////////////////////////////////////////Draw Item///////////////////////////////////////
function drawItems(){
   
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
        product.category.toLowerCase().includes(searchInput.value.toLowerCase()))
    let y=filteredProducts.map((item) => {
       


        return `
        <div class="card mt-3  col-md-4  col-sm-12 card-parent" style="padding: 5px;" id="card">
        <img class="card-img-top" src="${item.imageUrl}" alt="Card image" style="height: 300px; width: 100%;">
        <div class="card-body">
          <h4 class="card-title">Product: ${item.title}</h4>
          <p class="card-p1">Price:${item.price}$</p>
          <p class="card-p1">Category: ${item.category}</p>
          <button class="btn" id="card_btn" onclick="addToCart(${item.id})" style="display: ${item.added==true? "none": "block"}">Add to cart</button>
          <button class="btn" id="card_btn2"  style="display: ${item.added==true? "block": "none"}">Added To Cart</button>
          <i class="far fa-heart" id="heart" onclick=addToFav(${item.id}) style="display: ${item.liked==true? "none": "block"}; cursor: pointer;"></i>
          <i id="heart2" onclick="removeFromFav(${item.id})"  style="display: ${item.liked==true? "block": "none"}" class="fas fa-heart"></i>
         
        </div>
      </div>
     `
    })
    allProduct.innerHTML=y.join("");
}

drawItems()

let cartProductDiv=document.querySelector(".cart-div div")

let addedItem=localStorage.getItem("ProductsInCarts") ? JSON.parse(localStorage.getItem("ProductsInCarts")) : []; 

function cartIqonDiv(arr){
  let cartAddedItem=localStorage.getItem("ProductsInCarts") ? JSON.parse(localStorage.getItem("ProductsInCarts")) : arr; 
    if(cartAddedItem){
        cartAddedItem.map(item =>{
            cartProductDiv.innerHTML +=` <div id="cartprod">
            <p id="cartDivP" style=" font-weight:bold; font-size:12px">${item.title} </p>
            <div>
            <span style="font-size:12px" > ${item.quantity}</span> 
            <button id="Plus_btn2" onclick="plusBtn(${item.id})">+</button>
           <button id="Minus_btn2" onclick="minusBtn(${item.id})" >-</button></div>
           
           </div> `
        })
        badge.style.display="block"
        badge.innerHTML=cartAddedItem.length
    }
}
 cartIqonDiv(addedItem)
// add to cart ////////////////////////////////////////////////

       function addToCart(id){
           
            if(localStorage.getItem("userInform")){
            let choosenItem=products.find((item)=>item.id===id)
            let items=addedItem.find((item)=>item.id===id)
            choosenItem.added=true
            drawItems(products)
            console.log(choosenItem.added)
            if (items){
                items.quantity=(items.quantity)+1
               
            }else{
                choosenItem.quantity=1
                addedItem=[...addedItem,choosenItem]
                
            }
          
            cartProductDiv.innerHTML=""
            addedItem.forEach(item=>{
                cartProductDiv.innerHTML +=`
                <div id="cartprod">
                <p id="cartDivP" style=" font-weight:bold; font-size:12px">${item.title} </p>
                <div>
                <span style="font-size:12px" > ${item.quantity}</span> 
                <button id="Plus_btn2" onclick="plusBtn(${item.id})">+</button>
               <button id="Minus_btn2" onclick="minusBtn(${item.id})" >-</button></div>
               
               </div>
                `
             
              
            })

            localStorage.setItem("ProductsInCarts",JSON.stringify(addedItem))

            let cartProductlength=document.querySelectorAll(".cart-div div p")
            badge.style.display="block"
            badge.innerHTML=cartProductlength.length
           
            }
    else{
        window.location="login.html"
    }}
   
// cart iqon /////////////////////////////////////////////////
let cartIqon=document.querySelector("#shopping")
let cartDiv=document.querySelector(".cart-div")
cartIqon.addEventListener("click",oppenCart)

function oppenCart(){
    if(cartProductDiv.innerHTML !=""){
        if(cartDiv.style.display=="block"){
            cartDiv.style.display="none"
        }else{
            cartDiv.style.display="block"
        }
    }
}
// add to fav /////////////////////////////////
let favItems=localStorage.getItem("ProductsFav") ? JSON.parse(localStorage.getItem("ProductsFav")) : [];
function initializeLiked() {
    if (favItems) {
        favItems.forEach(favItem => {
            
            let product = products.find(item => item.id === favItem.id);
            if (product) {
                product.liked = true;
            }
            
        });
    }
}
initializeLiked()

function addToFav(id){
    if(localStorage.getItem("userInform")){
    let choosenItem=products.find((item)=>item.id===id)
 
    favItems=[...favItems,choosenItem]
    let uniqueItems=getUniqueArray(favItems,"id")
    
    localStorage.setItem("ProductsFav",JSON.stringify(uniqueItems))
products.map((item)=>{
    if(item.id===choosenItem.id){
item.liked=true
    }
})
localStorage.setItem("products",JSON.stringify(products))
drawItems(products)
    }
else{
window.location="login.html"
}}
function getUniqueArray(arr,filterType){
    let unique=arr
    .map((item)=>item[filterType])
    .map((item,i,final)=> final.indexOf(item)===i&&i)
    .filter((item)=>arr[item])
    .map((item)=>arr[item])
    return unique
}

// plus_minus ////////////////////////////////////
function plusBtn(id){
    let ProductsInCarts=JSON.parse(localStorage.getItem("ProductsInCarts"))
    
    let updatedItems= ProductsInCarts.map((item)=> {
    if(item.id==id){
      item.quantity=item.quantity+1
      
      
    }return item
    
    })
    localStorage.setItem("ProductsInCarts",JSON.stringify(updatedItems))
    cartProductDiv.innerHTML=""
   cartIqonDiv(updatedItems)
  oppenCart()
  }
  function minusBtn(id){
    let ProductsInCarts=JSON.parse(localStorage.getItem("ProductsInCarts"))
  
    let updatedItems= ProductsInCarts.map((item)=> {
    if(item.id==id){
      item.quantity=item.quantity-1
      item.quantity=Math.max(item.quantity,1)
      
      
    }return item
    
    })
    localStorage.setItem("ProductsInCarts",JSON.stringify(updatedItems))
    cartProductDiv.innerHTML=""
    cartIqonDiv(updatedItems)
  oppenCart()
  }
//   ///////////////////////////////////



