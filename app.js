/* Create a class for vehicle. Each vehicle instance should have the following properties:

make
model
year
Each vehicle instance should have access to a method called honk, which returns the string “Beep.”
*/
//Part One
class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep";
    }
    toString(){
        return `The make is ${this.make}, model ${this.model}, and year is ${this.year}`; 
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());


//Part Two
class Car extends Vehicle{
    constructor(make, model,year) {
        super(make,model,year);
        this.numWheel = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString());
console.log(myFirstCar.honk());
console.log(myFirstCar.numWheel);

//Part Three
class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheel = 2;
    }
    revEngine(){
        return 'VROOM!!!';
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(myFirstMotorcycle.toString());
console.log(myFirstMotorcycle.revEngine());
console.log(myFirstMotorcycle.numWheel);

//Part Four
class Garage{
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(car){
        if(!(car instanceof Vehicle)) {
               return "only vehicles are allowed!";
           }
           if(this.vehicles.length < this.capacity) {
               return  this.vehicles.push(car);
           } else {
              return "Sorry, we're full.";
           }
    }
}

let garage = new Garage(2);
console.log(garage.vehicles);
console.log(garage.add(new Car("Hyundai", "Elantra", 2015)))
console.log(garage.vehicles);
console.log(garage.add("Taco"))
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)))
console.log(garage.vehicles)
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)))
console.log()