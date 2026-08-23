abstract class Vehicle {
        
abstract start():void
}

class Car extends Vehicle{
    start(): void {
        console.log("car started")
    }
}



class Bike extends Vehicle{
    start(): void {
        console.log("bike started")
    }
}
let g = new Car()
let h = new Bike()
