
document.querySelector("#submit-4").addEventListener("click",function(e){
    e.preventDefault();
    
    const radius = document.getElementById("radius").value

    document.getElementById("volume").innerHTML += `Sphere radius: ${radius} <br />
        Volume: ${Math.floor((4/3 * Math.PI * Math.pow(Number(radius),3)))}`
})