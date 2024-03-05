b1=document.createElement("button")
b1.innerHTML="Start"
value=true
b1.onclick=()=>{
    var handle=setInterval(()=>{
        document.body.style.background=value ? "green" : "blue"
        value=!value
    },1000)
    console.log(handle)    //just to see what value it returns
}
document.body.appendChild(b1)