"use strict";
class SignUpPage {
    constructor(userName, password) {
        this.username = userName;
        this.password = password;
    }
    login() {
        console.log("User login successfully");
    }
}
// class HomePage extends SignUpPage{
// product : string = "box"
// }
// let userB = new HomePage("sri", 34254)
// console.log(userB.password)
class CartPage extends SignUpPage {
    constructor(userName, password, count) {
        super(userName, password);
        this.count = count;
    }
}
let userC = new CartPage("sri", 34254, 1);
console.log(userC.password);
console.log(userC.count);
//# sourceMappingURL=constructor.js.map