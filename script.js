console.log("NEXORA AI website is running!");

const myLoginBtn = document.getElementById("loginBtn");

myLoginBtn.addEventListener("click", function(event) {
   event.preventDefault();
    window.location.href = "auth.html";
});


// 1. HTML se Get Started button ko pakdo
const getStartedBtn = document.getElementById("gsBtn");

// 2. Click hone ka intezar karo
getStartedBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "auth.html";
});

//const productBtn = document.getElementById("productBtn");
productBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "product.html";
});

const solutionBtn = document.getElementById("solutionBtn");
productBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "solution.html";
});

const AboutBtn = document.getElementById("AboutBtn");
productBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "About.html";
});

//const const productBtn = document.getElementById("productBtn");
productBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "Get Started Free.html";
});
 
const const secondaryBtn = document.getElementById("secondaryBtn");
productBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "Watch Demo.html";
});
 


