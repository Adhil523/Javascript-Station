var objA={
    a:1,
    b:2,
    c:"Hello"

}

var objB={
    a1:1,
    b1:2,
    c:"Hello 2"       //c wil be overwritten as Hello 2 as variable name is same in both objects

}

var obj2={
    ...objA,              //obj2 has elements of objA & objB & extra element Z
    ...objB,
    Z:"Hello World"
}

console.log(obj2)

//Destructuring

const obj1={
    name:"Code Malayalam",
    place: 'Kerala',
    rank:1000
}

const {
    name:name,
    place,      //variable name should be same.Same result when array is used.If we want just name , specify only it.
    rank        //just use ...others instead of place,rank to print everything 
}=obj1
console.log(name,place,rank)

function destructure({name,place,rank}){      //to destructre within a fucntion for objects
    console.log(name,place,rank)
}
destructure(obj1)

var l=[1,2,34,5]
function destructre_array([a,b,c,d]){       //to destructure within a function for arrays(square brackets are used for arrays in parameters)
    console.log(a,b,c,d)

}
destructre_array(l)