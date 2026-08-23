
export class LoginPage{
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
