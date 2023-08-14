console.log("hello world");

const st: string = "Hello World!! I am learning TypeScript";

const arrayOfst: string[] = st.split(" ");

const ans: string = arrayOfst.reduce((a,b) => {
    if(a.length>b.length){
        return a;
    }else{
        return b;
    }
});

console.log(ans);


// two functions callback

 const fun1 = function(st: string, fun2: Function): void{
    console.log(st + "++++++");
    fun2(st);
    console.log(fun2(st));
 }

 const fun2 = function(abc: string): void{
    console.log(abc + "*****");
 }

 const fun3 = function(xyz: string): string{
    console.log(xyz + "-------");
    return xyz + xyz;
 }

 fun1("Hello", fun2);
 fun1("Bye", fun3);


// extract unique character from a string
const str: string = "prominentpixel";
const setOfunique = new Set<string>();

for(let i=0;i<str.length;i++){
    setOfunique.add(str.charAt(i));   
}

console.log(setOfunique);
let stringOfSet: string = "";
// stringOfSet = setOfunique.forEach(a => stringOfSet += a);

for(const memb of setOfunique){
    stringOfSet += memb;
}

console.log(stringOfSet);


// array concatination

const arr1: number[] = [1,2,3,4,5];
const arr2: number[] = [6,7,8,9,10];

const arr3: number[] = arr1.concat(arr2);

console.log(arr3);

// concating objects
