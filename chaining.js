//creating a promise
function myFetch(url){
    return new Promise((res,rej)=>{    //basically a promise just needs to have line7 and line 11 to tell what data has to be fetched when it is resolved or rejected.A resolve means the api call was a success.Reject means api call failed.
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
 
myFetch("https://jsonplaceholder.typicode.com/todos/1")        //promise is created using this url
    .then((data)=>{                           
        console.log("Requesting data 1 ")
        console.log(data)                                      //data from api call is printed
        return myFetch("https://jsonplaceholder.typicode.com/todos/2")        //a promise with parameter of second url is returned
    })
    .then((data)=>{                               //the returned prmosie from previous the() is resolved here with then()
        console.log("Requesting data 2")
        console.log(data)                        //the 'data' here is the data obtained from calling the second url
        return myFetch("https://jsonplaceholder.typicode.com/todos/3")
    })
    .then((data)=>{
        console.log("Requesting data 3")
        console.log(data)
    })


//Now using a function in js called fetch,which is an api call to get data from url

//NOTE: When another api call is used after promise chaining, the code becomes asynchronous.That is why output of below code is printed in between the earlier code's output

fetch("https://jsonplaceholder.typicode.com/todos/1").then((data)=>{
    console.log(data)           //data here is different from chaining data.Here is of a type 'response'
    //console.log(data.json());    //the response has a function json() which contains the data.
    return data.json()          //when json() is printed above we can see it is a promise.So we are returning it to resolve it as a promise chain
})
.then((data)=>{
    console.log(data)          //json() being a promise will return the data inside the url as 'data' which we can print here
})
