let msg: string = "hello world"
msg = "hi"
// msg = 123
console.log(msg)


let age: number = 12
console.log(typeof age)
let isActive: boolean = true
let data: null
data = null
let value: undefined = undefined
let val: any = "123"
val = 122
val = true
val = [1, 2, 34]

let undefVal: unknown
undefVal = false
console.log(typeof undefVal)
if (typeof undefVal === "string") {
    console.log(undefVal.toUpperCase())
}

if (true === true) {
    console.log(true)
}
function greet(): void {
    console.log("hello msg")
}
greet()

function add(a: number, b: number): number {
    return a + b
}

console.log(add(1, 2))


function greetMsg(name: string): string {
    return `hi ${name}`
}
greetMsg("sara")

let numbers: number[] = [1, 2, 3, 4]

interface User{
 readonly name: string,
    age: number ,
    bgrp?:string 
}
let obj: User = {
    name: "varsha",
    bgrp:"A1+Ve",
    age: 12
}
obj.bgrp = "B+ve"
obj.age = 14
// obj.name = "sree"

let obj1:User= {
    name: "varsha",
    age: 12
}


const tupleVal: [string, number, boolean, string[]] = ["sri", 21, true,["woodsland"]]

type Employee ={
    id:number,
    isAdmin?:boolean
}
type Account= {
salary: number
}
let teacher: Employee & Account= {
    id:876,
    isAdmin:true,
    salary:40000
}
let student: Employee = {
    id:34,
    isAdmin:false
}
type status = 404 | 200 | 500
let code : status = 200
type id = number | string
 let rollno : id = 21


 enum Values {
    Home = "Home page",
    Product = "Product page"
 }
 let curntPage:Values= Values.Home
 console.log(curntPage)