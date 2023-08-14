interface Students{
    id: number;
    name: string;
    college: string;
    age: number;
    gender?: Gender;
}

enum Gender{
    Male = "MALE",
    Female = "FEMALE"
}

class Stdnt implements Students{
    id: number;
    name: string;
    college: string;
    age: number;
    gender?: Gender;

    constructor(id: number, name: string, college: string, age: number, gender?: Gender){
        this.id = id;
        this.age = age;
        this.college = college;
        this.name = name;
        if(gender){
            this.gender = gender;
        }
    }
}

let stdnt1 = new Stdnt(1,"Rohan","GEC",20);
let stdnt2 = new Stdnt(2,"Rahul","GEC",24, Gender.Male);
let stdnt3 = new Stdnt(3,"Ram","IIT",19);
let stdnt4 = new Stdnt(4,"Rakesh","GEC",18);
let stdnt5 = new Stdnt(5,"Ramesh","NIT",20,Gender.Male);
let stdnt6 = new Stdnt(6,"Ranjan","IIT",22);
let stdnt7 = new Stdnt(7,"Rohit","GEC",21);

let listOfStudents: Stdnt[] = [stdnt1,stdnt2,stdnt3,stdnt4,stdnt5,stdnt6,stdnt7];

class College {
    name: string;
    noOfStudents: number = 0;

    constructor(name: string){
        this.name = name;
    }
}

const listOfColleges = function(listOfStudents: Stdnt[]): College[]{

    let listOfCollege: College[] = [];
    for(let student of listOfStudents){
        let foundCollege = false;
        for(let college of listOfCollege){
           if(college.name === student.college){
            college.noOfStudents++;
            foundCollege = true;
           }
        }
        if(foundCollege === false){
            let clg = new College(student.college);
            clg.noOfStudents++;
            listOfCollege.push(clg);
        }
    }
    return listOfCollege;
}

console.log(listOfColleges(listOfStudents));
