document.getElementById("button").onclick=myfunction
document.getElementById("button").innerText="modified"
var b=document.createElement("h4")
b.innerHTML="Hello world"
document.getElementById("demo").appendChild(b)

function myfunction(arg){
    console.log(arg)
}

a=[1,2,3,4,5]
a.forEach(function (val){
    console.log(val)
})

