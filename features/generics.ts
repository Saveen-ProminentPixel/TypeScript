class ArrayOfNumbers {
    constructor(public collection: number[]){}

    get(index: number): number{
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything <T> {
    constructor (public collection: T[]) {}

    get(index : number): T {
        return this.collection[index];
    }
}

// new ArrayOfAnything<string>(['a', 'b', 'c']);

// without defining type
const arr = new ArrayOfAnything(['a','b','c']);


// Example of generics with functions
function printStrings(arr: string[]): void{
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void{
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void{
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

printAnything<string[]>([["a","d"], ["b","u","t"], ["c"]]);


// Generic Constraints
class Car{
    print(){
        console.log("I am a Car");
    }
}

class House{
    print(){
        console.log("I am a House");
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for(let i=0;i<arr.length;i++){
        arr[i].print();
    }
}

printHousesOrCars<House | Car>([new House(), new House(), new Car()]);

printHousesOrCars<House>([new House(), new House()]);