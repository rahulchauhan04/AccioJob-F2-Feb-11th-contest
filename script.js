/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map((student) => {
    if (student.marks > 50) {
      console.log(
        `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`
      );
    }
  });
}

function PrintStudentsbyForEach() {
  arr.forEach((student) => {
    if (student.marks > 50) {
      console.log(
        `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`
      );
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  arr = arr.filter((student) => student.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  const newStudents = [
    { id: 4, name: "susan", age: "21", marks: 88 },
    { id: 5, name: "tom", age: "22", marks: 76 },
    { id: 6, name: "jerry", age: "20", marks: 59 },
  ];
  const combineArray = arr.concat(newStudents);
  console.log(combineArray);
}
