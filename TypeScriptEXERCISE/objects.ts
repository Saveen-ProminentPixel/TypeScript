let obj1:{id: number; name: string} = {
    id: 10,
    name: "Sam"
}

let obj2:{age:number; country:string} = {
    age: 24,
    country: "India"
}

let obj3:{id: number; name: string; age:number; country:string} = {
    id: obj1.id,
    name: obj1.name,
    age: obj2.age,
    country: obj2.country
}

console.log(obj3);


// using interface
interface Obj {
    id: number;
    name: string;
    age: number;
    country: string;
}

let obj4: Obj = {
    id: 3,
    name: "Max",
    country: "USA",
    age: 36
}
console.log(obj4);


// using type alias
type ObjType = {
    id: number;
    name: string;
    age: number;
    country: string;
}

let obj5: ObjType = {
    id: 6,
    name: "Alex",
    country: "Uk",
    age: 42
}
console.log(obj5);


// property modifiers
type ObjType2 = {
    id: number;
    name: string;
    age?: number;
    country?: string;
}

let obj6: ObjType2 = {
    id: 7,
    name: "Rahul",
    country: "Nepal"
}
console.log(obj6);