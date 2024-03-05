function greetings(){
    document.write("<h1>Hello world</h1>")
}
var a=document.getElementsByClassName("common")
a[0].innerHTML="Bye"
a[2].style.color= 'red'

var heading=document.createElement("h1")
 function create(){
    heading.innerHTML="Hello World"
    document.body.appendChild(heading)
 }
 function remove(){
    heading.remove()
    document.getElementsByClassName("common")[0].remove()
 }

 var c=document.getElementById("h")
 var b=document.getElementById("btn")
 b.addEventListener("click",changecolor)
 function changecolor(){
    c.style.color="red"
 }
 b.addEventListener("dblclick",change)
function change(){
    c.style.color="black"
}
c.addEventListener("mouseover",changes)
function changes(){
    c.style.backgroundColor="orange"
}

let employee = {
    name:"John",
    position:"Accountant",
    salary: 30000,
    getsalary: function(){
        document.write("Salary of "+ this.name +" is "+this.salary)
    }
}

employee.getsalary()