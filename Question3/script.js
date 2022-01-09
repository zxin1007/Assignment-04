const password = "12345678"

const btn = document.querySelector("button")

btn.addEventListener("click", function(e){
    e.preventDefault()
    const pass = document.getElementById("password").value
    if (pass==password){
        document.querySelector("h1").textContent = "Welcome, "+ document.getElementById("username").value+" !"
        document.querySelector("form").style.display = "none";
    } else{
        alert("the password is incorrect")
    }
})