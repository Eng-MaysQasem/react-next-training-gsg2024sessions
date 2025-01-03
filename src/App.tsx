import { useState } from "react";
import "./App.css";
import Student from "./Componanets/Student/Student.componannt";
import { Istudent } from "./types";

const CoursesList = ["React", "HTML", "CSS"];

const Initaial_List: Array<Istudent> = [
  {
    id: "1",
    name: "Mays Qasem",
    age: 23,
    isGraduate: true,
    courseList: ["e1", "e2", "a1", "a3"],
  },
  {
    id: "2",
    name: "Areej Qasem",
    age: 21,
    isGraduate: false,
    courseList: CoursesList,
  },
  {
    id: "3",
    name: "Sama Qasem",
    age: 16,
    isGraduate: false,
    courseList: ["css", "e2"],
  },
  {
    id: "4",
    name: "Rahaf Qasem",
    age: 81,
    isGraduate: !false,
    courseList: CoursesList,
  },
];

interface Istudent {
  id: string;
  name: string;
  age: number;
  isGraduate: boolean;
  courseList: string[];
}

function App() {
  const [studentsList, setStudentsList] = useState<Istudent[]>(Initaial_List);
  const removeLast = () => {
    const newList = [...studentsList]; //shallow copy
    newList.pop();
    //newList.shift(); to remove first
    setStudentsList(newList);
  };

  return (
    <>
      <h1>Welcome to GSG course</h1>
      <button onClick={removeLast}>Remove Last Student</button>
      {studentsList.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          age={student.age}
          isGraduate={student.isGraduate}
          list={student.courseList}
        />
      ))}
    </>
  );
}

export default App;
