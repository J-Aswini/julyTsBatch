 class SignUpPage{
    username: string
    password: number

    constructor(userName : string, password: number){
this.username = userName
this.password = password
    }
    login(){
        console.log("User login successfully")
    }
}



// class HomePage extends SignUpPage{
// product : string = "box"
// }
// let userB = new HomePage("sri", 34254)
// console.log(userB.password)



class CartPage extends SignUpPage{
count : number
constructor(userName: string, password: number, count: number){
    super(userName, password)
    this.count = count
}
}

let userC = new CartPage("sri", 34254, 1)
console.log(userC.password)
console.log(userC.count)


