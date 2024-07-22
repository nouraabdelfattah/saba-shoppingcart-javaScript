let firstName=document.getElementById("first_name")
let lastName=document.getElementById("last_name")
let email=document.getElementById("email")
let password=document.getElementById("password")
let registerBtn=document.getElementById("sign_up")
let registerContainer=document.getElementById("register_container")
registerBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(firstName.value===""||lastName.value===""||email.value===""||password.value===""){
        setTimeout( () => {
            registerContainer.innerHTML="Please Fill all data fields"
        registerContainer.style.color="red"
        }, 3);
       
    }
    else{
        
        // localStorage.setItem("firstName",firstName.value);
        // localStorage.setItem("lastName",lastName.value);
        // localStorage.setItem("email",email.value);
        // localStorage.setItem("password",password.value);

let users =JSON.parse(localStorage.getItem("users")) ||[] ;
let user ={
    firstName:firstName.value,
    lastName:lastName.value,
    email:email.value,
    password:password.value

}
users.push(user)
localStorage.setItem("users",JSON.stringify(users))

        setTimeout( () => {
            window.location="login.html"
        }, 1300);
    }
})