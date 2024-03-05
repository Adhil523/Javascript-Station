var button=document.getElementById("mybutton")
button.onclick=()=>{
    console.log("Event started")
    var arr=[]
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        success : (data)=>{
            console.log("ajax1 started")
            arr.push(data.title)
            console.log("ajax1 ended")
        },
        async:false
        

    })
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        success : (data)=>{
            console.log("ajax2 started")
            arr.push(data.title)
            console.log("ajax2 ended")
        },                                 //if we do this without async=false for both ajax,text box will be empty as we try to change value of textbox to content of array before the callbacks are performed ,that is the array is empty at that time
        async:false

    })
    document.getElementById("mytext").value=arr.join('\n')


    console.log("Event finished")
}


/* Another alternative to make it synchronous without using async is by placing all ajax inside the success of the first ajax

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        success : (data)=>{
            console.log("ajax1 started")
            arr.push(data.title)
            console.log("ajax1 ended")

            $.ajax({                        //Second ajax is placed inside 'success' of first
                url: "https://jsonplaceholder.typicode.com/todos/2",
                success : (data)=>{
                    console.log("ajax2 started")
                    arr.push(data.title)
                    console.log("ajax2 ended")

                    document.getElementById("mytext").value=arr.join('\n')     //this is the funtion to add to text box.Since it is inside all ajax, the array will have all content and we get text inside the textbox
                })

            } 


        })
        */

//We do this because async:false is event blocking
                                    
    