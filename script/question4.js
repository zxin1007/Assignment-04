
document.querySelector("#submit-4").addEventListener("click",function(e){
    e.preventDefault();
    
    const radius = document.getElementById("radius").value

    document.getElementById("volume").textContent= "Sphere radius: "+radius+" Volume: "+Math.floor((4/3 * Math.PI * Math.pow(Number(radius),3)))
})