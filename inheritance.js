class Button{
    constructor(name){
        this.b=document.createElement('button')
        this.b.innerHTML=name;
        document.body.appendChild(this.b)

    }
    click(fn){                         
        this.b.onclick=fn      //we are passing a function as parameter into onlick() for the function to run on clicking the button
    }

}

class GreenButton extends Button{
    click(fn){                            //overrides the existing function.Now only this click() function will be called
        this.b.onclick= ()=>{
            this.b.style.background='green'
            fn()
        }
        
    }
}
class DemoButton extends Button{
    constructor(name){
        super(name)                   //when writing constructor in child we must call the parent constructor using super() or else it will show error
        this.b.style.width="100px"
    }
    
    click(fn){
        super.click(()=>{                  //same code as button above but by using super() to call the parent's click() function.We are passing a function into that function's onclick()
            this.b.style.background="blue" 
            fn();                          //when button is clicked, both background as well as the function we pass as a parmeter in b3 should run
        })
                                    
    }
}
var b1=new Button("Click me")
b1.click(()=>{console.log("Hello")})

var b2=new GreenButton("New Button")
b2.click(()=>{console.log("Second button")})

var b3=new DemoButton("Demo Button")
b3.click(()=>{console.log("Third button")})