const login = document.querySelector(".form-container.register .login");
const registerPage = document.querySelector(".form-container.register");
const loginPage = document.querySelector(".form-container.login");
const text1 = document.querySelector(".form-container .text1");

const door = document.querySelector('.registeration');
const spotlight = document.getElementById('spotlight');



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









function updateSpotlightPosition() {
  const rect = door.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
 spotlight.style.maskImage = `radial-gradient(circle at ${centerX}px ${centerY}px, transparent 20vw, rgba(0, 0, 0, 1) 30vw)`;
}

door.addEventListener('mouseenter', () => {
  updateSpotlightPosition();
  console.log("It is working");
  spotlight.style.opacity = '1';
});

door.addEventListener('mouseleave', () => {
  spotlight.style.opacity = '0';
});

let Subs = Array.from(document.querySelectorAll(".registeration .btn>button"));

let fname = document.querySelector("#first-name");
let lname = document.querySelector("#last-name");
let mail = document.querySelector("#email");
let phone = document.querySelector("#phone");
let pass = document.querySelector("#pass");
let cnfpass = document.querySelector("#passcnf");



console.log("It is working");
Subs[0].addEventListener("click",(e)=>{
    console.log("I was clickckcked");
    e.preventDefault();
        if(fname.checkValidity() && lname.checkValidity() && mail.checkValidity() && phone.checkValidity() && pass.checkValidity() && passcnf.checkValidity() )
         {

    let vfname = fname.value;
    let vlname = lname.value;
    let vmail = mail.value;
    let vphone = phone.value;
    let vpass = pass.value;
    let vpasscnf = cnfpass.value;

        if(!vpass == vpasscnf){
            alert("Password did not match, please try again!...");
            return;
        }
        if(getNumberLength(vpass)<8){
            alert("Password length: minimum 8 characters, please try again...");
            return;
        }

        if(getNumberLength(vphone)!=10){
            alert("Enter a valid phone number, please try again...");
            return;
        }

        if(!isOnlyAlphabets(vfname)|| !isOnlyAlphabets(vlname)){
            alert("Enter a valid name, please try again...");
             return;
        }





    const link = document.createElement('a');
    link.href = 'result.html';        // Destination page
    link.target = '_blank';            // Opens in a new tab
    link.rel = 'noopener noreferrer';  // Security best practice
    document.body.appendChild(link);   // Required for Firefox
    link.click();
    document.body.removeChild(link);


let fname1 = document.querySelector("#first");
let lname1 = document.querySelector("#last");
let mail1 = document.querySelector("#email1");
let phone1 = document.querySelector("#number");
let pass1 = document.querySelector("#passw");

let fullName = document.querySelector("name");

fname1.textContent = vfname;
lname1.textContent = vlname;
fullName.textContent = vfname + " " + vlname;
mail1.textContent = vmail;
phone1.textContent = vphone;
pass1.textContent = vpass;


        }

function isOnlyAlphabets(str) {
  return /^[A-Za-z]+$/.test(str);
}




        function getNumberLength(input) {
  const value = input.trim(); // get raw input as string
  const digitsOnly = value.replace(/\D/g, ''); // remove any non-digit characters
  return digitsOnly.length;
}



})

