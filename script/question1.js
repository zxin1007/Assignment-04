let str="I'm right"
const p = document.getElementsByClassName("line")[0]
const p1 = document.getElementsByClassName("line")[1]

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click",function(){
    if (!p.textContent){
        p.textContent = str
        p1.textContent = ""
        determinestr()
    }
})

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click",function(){
    if (!p1.textContent){
        p1.textContent = str
        p.textContent = ""
        determinestr()
    }
})

function determinestr(){
    if (str==="I'm right"){
        str = "No I'm right!"
    } else  {
        str = "I'm right"
    }
}