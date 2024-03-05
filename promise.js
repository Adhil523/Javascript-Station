function myFetch(url){
    return new Promise((res,rej)=>{         //promise has a constructor with 2 arguments. One for telling it what data to be taken when resolved, and other to tell which data to take when it is rejected
        $.ajax({
            type:'GET',
            url: url,
            success : (msg)=>{
                res(msg)            
            },
            error: (xhr,statusText)=>{
                rej(statusText)
            }
    })
})
}

const pr=myFetch("https://jsonplaceholder.typicode.com/todos/1")
pr.then((data)=>{
    console.log(data)
}) 

var b1=document.getElementById("mybutton")
b1.onclick=()=>{
    pr.then((data)=>{
        console.log(data)
    })
}

