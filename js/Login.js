let email=document.getElementById("email")
let password=document.getElementById("password")
let LoginBtn=document.getElementById("sign_in")
let rememberBtn=document.getElementById("radio")
 let getUsers=JSON.parse(localStorage.getItem("users"))
let registerIqon1=document.getElementById("register_iqon")
let registerContainer=document.getElementById("register_container")
LoginBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(email.value===""||password.value===""){
        setTimeout( () => {
            registerContainer.innerHTML="Please Fill all data fields"
        registerContainer.style.color="red"
        }, 3);
       
    }else if(!getUsers){
        setTimeout( () => {
            registerContainer.innerHTML="The Email doesn't exist you have to register"
        registerContainer.style.color="red"
        }, 3);
    }
    else  {
      
            let user =getUsers.find(user =>user.email === email.value&&user.password===password.value)
            if(user){
            setTimeout( () => {
                window.location="index.html"
                localStorage.setItem("userInform",JSON.stringify(user))
                if(rememberBtn.checked){
                    localStorage.setItem("email",email.value)
                    localStorage.setItem("password",password.value)
                    localStorage.setItem("chekbox","checked")
                }else{
                    localStorage.removeItem("email")
                    localStorage.removeItem("password")
                    localStorage.removeItem("chekbox")
                }

            }, 1300);
        }
        else{
            setTimeout( () => {
                registerContainer.innerHTML="Email or Password is uncorrect"
            registerContainer.style.color="red"
            }, 3);
        }
    } 
})

//////////////////////////////////// remember me button/////////////////////////////

window.onload=function(){
    let checkMail=localStorage.getItem("email")
   let checkPass= localStorage.getItem("password")
   let checkBtn= localStorage.getItem("checkbox")
   if(checkBtn!==""){
       email.value=checkMail
       password.value=checkPass
   
   }else{
       email.value=""
       password.value=""
       rememberBtn.removeAttribute("checked")
   }
    
}
