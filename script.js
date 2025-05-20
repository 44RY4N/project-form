const login = document.querySelector(".form-container.register .login");
const registerPage = document.querySelector(".form-container.register");
const loginPage = document.querySelector(".form-container.login");
const text1 = document.querySelector(".form-container .text1");



login.addEventListener("click",(e)=>{
    e.preventDefault();
    registerPage.classList.add("inactive");
    loginPage.classList.remove("inactive");
    text1.classList.add("inactive");
    
})

const register = document.querySelector(".form-container.login .register");

register.addEventListener("click", (e) => {
    e.preventDefault();
    loginPage.classList.add("inactive");
    registerPage.classList.remove("inactive");
});


