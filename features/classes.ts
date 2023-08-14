class Vehicle{
    // public drive(): void{
    //     console.log("Dhooom!!!!");
    // }

    constructor(public color: string){
    }

    protected honk(): void{
        console.log("Beep!");
    }
}

class Cars extends Vehicle{

    constructor(public wheels: number, color: string){
        super(color);
    }
    private drive(): void {
        console.log("Vroooom!!!");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle1 = new Vehicle("orange");
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
console.log(vehicle1.color);

const cars = new Cars(4, "red");
cars.startDrivingProcess();
// cars.honk();