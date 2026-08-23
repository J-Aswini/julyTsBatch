"use strict";
let msg = "hello world";
msg = "hi";
// msg = 123
console.log(msg);
let age = 12;
console.log(typeof age);
let isActive = true;
let data;
data = null;
let value = undefined;
let val = "123";
val = 122;
val = true;
val = [1, 2, 34];
let undefVal;
undefVal = false;
console.log(typeof undefVal);
if (typeof undefVal === "string") {
    console.log(undefVal.toUpperCase());
}
if (true === true) {
    console.log(true);
}
function greet() {
    console.log("hello msg");
}
greet();
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function greetMsg(name) {
    return `hi ${name}`;
}
greetMsg("sara");
let numbers = [1, 2, 3, 4];
let obj = {
    name: "varsha",
    bgrp: "A1+Ve",
    age: 12
};
obj.bgrp = "B+ve";
obj.age = 14;
// obj.name = "sree"
let obj1 = {
    name: "varsha",
    age: 12
};
const tupleVal = ["sri", 21, true, ["woodsland"]];
let teacher = {
    id: 876,
    isAdmin: true,
    salary: 40000
};
let student = {
    id: 34,
    isAdmin: false
};
let code = 200;
let rollno = 21;
var Values;
(function (Values) {
    Values["Home"] = "Home page";
    Values["Product"] = "Product page";
})(Values || (Values = {}));
let curntPage = Values.Home;
console.log(curntPage);
console.log(123);
//# sourceMappingURL=index.js.map