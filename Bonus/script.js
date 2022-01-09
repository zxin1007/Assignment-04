
document.querySelector("button").addEventListener("click",function(e){
    e.preventDefault();
    
    const radius = document.getElementById("radius").value

    document.getElementById("volume").textContent= "Sphere radius: "+radius+" Volume: "+(4/3 * Math.PI * Math.pow(Number(radius),3))
})