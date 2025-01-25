import { useState, useEffect } from "react";
import "./App.css";
import Student from "./Componanets/Student/Student.componannt";
import { Istudent } from "./types";
import AddForm from "./Componanets/AddForm/AddFormCommponants";

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
    isGraduate: true,
    courseList: CoursesList,
  },
];

function App() {
  const [studentsList, setStudentsList] = useState<Istudent[]>(Initaial_List);
  const [totalAbsent, setTotalAbsent] = useState(0);

  const dataChange = (newData: Istudent[]) => {
    localStorage.setItem("students-list", JSON.stringify(newData));
  };

  const Handeladdstudent = (newStudent: Istudent) => {
    const updatedList = [newStudent, ...studentsList];
    setStudentsList(updatedList);
    dataChange(updatedList);
  };

  const removeLast = () => {
    const newList = [...studentsList];
    newList.pop();
    setStudentsList(newList);
    dataChange(newList);
  };

  const handelAbsentChange = (name: string, abs: number) => {
    console.log("[App.tsx] Absent changed");
    console.log(`${name}: ${abs}`);
    setTotalAbsent(totalAbsent + abs);
  };

  useEffect(() => {
    console.log("Hello from APP component!");
    const storedData: Istudent[] = JSON.parse(
      localStorage.getItem("students-list") || "[]"
    );
    setStudentsList(storedData.length > 0 ? storedData : Initaial_List);
  }, []);

  return (
    <>
      <h1>Welcome to GSG course</h1>
      <AddForm onSubmit={Handeladdstudent} />
      <button onClick={removeLast}>Remove Last Student</button>
      <b>Total Absent: {totalAbsent}</b>

      {studentsList.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          age={student.age}
          isGraduate={student.isGraduate}
          list={student.courseList}
          onAbsentChange={handelAbsentChange}
        />
      ))}
    </>
  );
}

export default App;

