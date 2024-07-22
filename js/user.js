let userInfo =document.getElementById("user-info")
let userData=document.getElementById('user')
let loginIqon=document.getElementById("login_iqon")
let registerIqon=document.getElementById("register_iqon")
let signout=document.getElementById("signout")

let userInform=JSON.parse(localStorage.getItem("userInform"))
let userName="Hello!"+" " + userInform.firstName

// ////////////////////////////////////////////////////
if(localStorage.getItem('userInform')){
    loginIqon.remove()
    registerIqon.remove()
    userInfo.style.display='flex'
    userData.innerHTML=userName 
   signout.style.display="block"
   shopping.style.display="block"
}

signout.onclick=function(){
    localStorage.removeItem("userInform")
  setTimeout(()=>{
    window.location="login.html"
  },1500)
}