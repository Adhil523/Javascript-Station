async function getvalue(){
    obj={name:"Malayalam"}
    return Promise.resolve(obj)        //even if we return it as a Promise from async functions returned value is Promise, not a chained Promise

}
const v=getvalue()
console.log(v)
v.then((data)=>{
    console.log(data)
})

console.log("Started")
getv()
console.log("Ended")

function getv(){
    const datas=fetch("https://jsonplaceholder.typicode.com/todos/1")       //if we check output,we can see that ater "Started" is printed, it blocks the code till datas retieves .fetch() data and only then "Ended is printed."
    console.log(datas)                                                      //if the code was just fetch("https://jsonplaceholder.typicode.com/todos/1") , the output would come only after Started and Ended is prnted , that is, code is not blocked
    
}

async function getawait(){
    const datas=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log("data", datas)
    const jdata=await datas.json()
    console.log("JSON",jdata)    //IMPORTANT :when we print this, even though it is supposed to be a json,it turns out to be the data due to await.That is, when await is used,it automatically resolves one time
    return jdata                 //however,if we return the same,we have to resolve it because ASYNC FUNCTIONS RETURN DATA AS PROMISE(IMPORTANT CONCEPT) 
    }


console.log("Started")
console.log("ASYNC" , getawait()) 
console.log("Ended")