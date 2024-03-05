const regexp= /mine$/i

str1="cat is mine"
str2="my cat"

console.log(regexp.test(str1))
console.log(regexp.test(str2))

function text(arg){
    var tb=document.getElementById('label1')
    console.log(arg.value)
    var error=validate(arg.value)
    console.log(error)
    if(error){
        tb.innerText=error
    }
    else{
        tb.innerText=' '
    }
}

function validate(value){
    const pat=/^[a-z][a-z0-9_]*$/i
    if(pat.test(value)){
        return ' '
    }
    else{
       return "Invalid string"
    }
    
}


function dates(arg){
    var tb=document.getElementById('label2')
    
    var error=datecheck(arg.value)
    
    if(error){
        tb.innerText=error
    }
    else{
        tb.innerText=' '
    }
}

function datecheck(value){
    const pat=/^([0-2]?\d|3[01])-(0?\d|1[0-2])-(\d{4})$/     //^ is given because otherwise dates above 31 also returns true. $ is given at end to say that it ends with a 4 digit number so that numbers like 20005 gives error that is,year should not go beyond 4 digits
    if(pat.test(value)){                                   //if we dont give $ in above line, it will show true for dates like 12-12-20005 as it just chekcs till 2000 ands whatever comes after that is also given true as we are not specifying with what it should end
        const arr=value.match(pat)                         //function of string. creates array with first element as string matched by the pattern.Next elements are the values enclosed by capturing groups
        console.log(arr[1],arr[2],arr[3])
        
        
        return ' '
    }
    else{
        return "Invalid date"
    }
}