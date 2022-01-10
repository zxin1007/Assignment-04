const password = "12345678"

const btn = document.querySelector("#sumbit-2")

btn.addEventListener("click", function(e){
    e.preventDefault()
    const pass = document.getElementById("password").value
    if (pass==password){
        document.querySelector("#question2-h1").textContent = "Welcome, "+ document.getElementById("username").value+" !"
        document.querySelector("form").style.display = "none";
    } else{
        alert("the password is incorrect")
    }
})