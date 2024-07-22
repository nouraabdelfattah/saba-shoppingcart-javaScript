
let allProduct=document.querySelector('#products_section')

function    drawCartProducts(allproducts=[]){
  let products=JSON.parse( localStorage.getItem("ProductsInCarts"))||allproducts
  let totalPrice=0
  let total=document.getElementById("total")
    let y=products.map((item) => {
      let totalItemPrice=item.price*item.quantity
    
       totalPrice +=totalItemPrice
        return `
        <div class="card mb-3 col-md-4 col-sm-12 card-parent" style=" padding:5px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.imageUrl}" class="img-fluid rounded-start" style="margin-top:5px; height:130px"alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">Price: ${item.price}$</p>
              <p class="card-text"><small class="text-muted">${item.category}</small></p>
              
              <div style="display:flex ; justify-content:space-between;">
              <button class="btn" id="card_btn" onclick="removeFromCart(${item.id})">Remove</button>
              <p id="products_number">${item.quantity}</p>
              
              <div><button id="Plus_btn" onclick="plusBtn(${item.id})">+</button>
              <button id="Minus_btn" onclick="minusBtn(${item.id})" >-</button></div>
              
          </div>
        
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      
     `
  
    })
    allProduct.innerHTML=y.join("");
   total.innerHTML="Total Price: "+ totalPrice
    
}


drawCartProducts()
// //////////////////////////////////////////////////////////////////

function plusBtn(id){
  let ProductsInCarts=JSON.parse(localStorage.getItem("ProductsInCarts"))
  
  let updatedItems= ProductsInCarts.map((item)=> {
  if(item.id==id){
    item.quantity=item.quantity+1
    
    
  }return item
  
  })
  localStorage.setItem("ProductsInCarts",JSON.stringify(updatedItems))
  drawCartProducts(updatedItems)

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
  drawCartProducts(updatedItems)

}
// //////////////////////////////////////////////////////////////////
function removeFromCart(id){
 let ProductsInCarts=localStorage.getItem("ProductsInCarts")
if (ProductsInCarts){
   let cartItems=JSON.parse(ProductsInCarts);
  let filteredItems = cartItems.filter((item) => item.id!==id)

  localStorage.setItem("ProductsInCarts",JSON.stringify(filteredItems))
  drawCartProducts(filteredItems)
}



}


/////////////////////////////////////////////////
let favDiv=document.getElementById("favourites")
function    drawCartFav(allproducts=[]){
  let products=JSON.parse( localStorage.getItem("ProductsFav"))||allproducts
    let x=products.map((item) => {
     
        return `
        
        <div class="card mb-3 col-md-3 me-1 col-sm-12" style=" padding:5px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.imageUrl}" class="img-fluid rounded-start" style="margin-top:5px; height:130px"alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">Price: ${item.price}$</p>
              <p class="card-text"><small class="text-muted">${item.category}</small></p>
              
              <div style="display:flex ; justify-content:space-between;">
              <button class="btn" id="card_btn" onclick="removeFromFav(${item.id})">Remove from Favourites</button>
             
              
              
              
          </div>
        
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      
     `
  
    })
   favDiv.innerHTML=x.join("");
  
    
}

drawCartFav()
// remove from fav
function removeFromFav(id){
  let productInFav=localStorage.getItem("ProductsFav")
 if (productInFav){
    let cartFav=JSON.parse(productInFav);
   let filteredFav = cartFav.filter((item) => item.id!==id)
 
   localStorage.setItem("ProductsFav",JSON.stringify(filteredFav)) 
   drawCartFav(filteredFav)
 }
 }
 
// ///////////////////////////////////////




