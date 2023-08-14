type Student = {
    rollNo: number;
    name: string;
    marks: number;
    result?: Result;
}

let arrayOfStudents: Student[] = [];

let student1: Student = {rollNo: 1, name: "Rohan", marks: 80};
let student2: Student = {rollNo: 2, name: "Anjali", marks: 25};
let student3: Student = {rollNo: 3, name: "Sonali", marks: 75};
let student4: Student = {rollNo: 4, name: "Pankaj", marks: 63};
let student5: Student = {rollNo: 5, name: "Sanjay", marks: 82};
let student6: Student = {rollNo: 6, name: "Himanshu", marks: 96};
let student7: Student = {rollNo: 7, name: "Parth", marks: 16};
let student8: Student = {rollNo: 8, name: "Jay", marks: 45};
let student9: Student = {rollNo: 9, name: "Priyanka", marks: 76};

arrayOfStudents.push(student1);
arrayOfStudents.push(student2);
arrayOfStudents.push(student3);
arrayOfStudents.push(student4);
arrayOfStudents.push(student5);
arrayOfStudents.push(student6);
arrayOfStudents.push(student7);
arrayOfStudents.push(student8);
arrayOfStudents.push(student9);

enum Result {
    PASS = "PASS",
    FAIL = "FAIL"
}

const marksGT70 = (students: Student[]): Student[] => {
    let arrMarksGT70: Student[] = [];
    for(const student of students){
        if(student.marks > 70){
            arrMarksGT70.push(student);
        }
    }
    return arrMarksGT70;
}

const arrMarksGT70 = marksGT70(arrayOfStudents);
arrMarksGT70.forEach(a => console.log(a));

const nameOfStudents = (students: Student[]): string[] => {
    let names: string[] = [];
    for(const student of students){
        names.push(student.name);
    }
    return names;
}

console.log(nameOfStudents(arrayOfStudents));


const addField = (students: Student[]): Student[] => {
    for(const student of students){
        if(student.marks > 35){
            student.result = Result.PASS;
        }else{
            student.result = Result.FAIL;
        }
    }
    return students;
}

console.log(addField(arrayOfStudents));