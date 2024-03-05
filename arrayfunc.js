const arr=[
    {
        name:"Alice",
        mark:35,
        place:"Kannur"
    },
    {
        name:"Bob",
        mark:20,
        place:"Kasargod"
    },
    {
        name:"Jimmy",
        mark:30,
        place:"Kozhikode"
    },
    {
        name:"Alan",
        mark:37,
        place:"Kollam"
    },
]

arr.forEach((i,ind)=>{   //foreach takes callback functions as arguments.For callback functions, first argument is the element and second argument is its index.
                                   //here i is each element and ind is its index
    console.log(i.name," ",ind)
})
var found=arr.find((item=>{    //find() has same syntax as foreach.In its body,write return statement to define the condition we want to find.
    return item.name=="Bob"    //returns only first element satisfying the condition
}))
console.log(found)

 var filtered=arr.filter((item)=>{   //same as find() but returns al the satisfying elements in AN ARRAY
    return item.mark>30
 })
 console.log(filtered)

 var newarr=arr.map((item)=>{          //map() returns array of same length as referance array but we can define its contents
    return item.name+" "+item.place
 })
 console.log(newarr)

 var newarr=arr.map((item)=>{           //another example of map function
    return {...item,country:"India"}    //spread operator returns content of the item.Along with it a variable country is added
 })
 console.log(newarr)

 var red=arr.reduce((total,item)=>{   //description of reduce() in notes
    total.push(item.name)             //an empty array is given as initial value of total.Push fucntion is same as append in python
    return total                      //each name of item is pushed into 'total' array to get array of names
 },[])
 console.log(red)