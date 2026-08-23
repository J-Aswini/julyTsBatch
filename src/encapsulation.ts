class BankAccount{
    private name: string
constructor(name: string){
this.name = name
}
getName(){
    return this.name
}
}

const l = new BankAccount("ram")
// console.log(l.name)
console.log(l.getName())
//public - access anywhere
//private - access within that class and cannot directly access outside from that class
//protected - access within that class and child class
