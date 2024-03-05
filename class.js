class Student{
    name;
    yob;

    constructor(n,y){
        this.name=n
        this.yob=y
    }
    static printMinyob(...args){     //spread operator is given here to input it as a single argument as it takes out the content
        console.log(args)
        var arr=args.map((item=>item.yob))
        console.log(Math.min(...arr))
    }

    getAge(){
        return new Date().getFullYear() - this.yob
    }
    getName(){
        return this.name
    }
}         //when given value to class,it becomes same as defining these variables using an object.

var student1=new Student('Alen',1990)   //for this type of value enterring, constructor should be specified.

var student2= new Student()    //long way of value enterring
student2.name="Bob"
student2.yob=1985


console.log(student1.getAge(), student1.getName())
console.log(student2.getAge(), student2.getName())
Student.printMinyob(student1,student2)