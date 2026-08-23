class ParentClass {
    amount = 12445
    greet(){
        console.log("Hello world")
    }
}
 class ChildClass extends ParentClass{
    study(){
        console.log("learning")
    }
 }

 let userA = new ChildClass()
 console.log(userA.amount) //inherited
 userA.greet()
 userA.study()
