import { useState, useEffect, useRef } from "react";
import "./App.css";
import Student from "./Componanets/Student/Student.componannt";
import { Istudent } from "./types";
import AddForm from "./Componanets/AddForm/AddFormCommponants";
import useLocalStorage from "./hooks/localStorage.hooks"; 

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
  // custom hook
  const { storedData: studentsList, setStoredData } = useLocalStorage(Initaial_List, "students-list");
  const [totalAbsent, setTotalAbsent] = useState(0);

  const dataChange = (newData: Istudent[]) => {
    setStoredData(newData);
  };

  const Handeladdstudent = (newStudent: Istudent) => {
    const updatedList = [newStudent, ...studentsList];
    dataChange(updatedList);
  };
  const lastStdRef=useRef<HTMLDivElement>(null);

  const removeLast = () => {
    const newList = [...studentsList];
    newList.pop();
    dataChange(newList);
  };

  const handelAbsentChange = (name: string, abs: number) => {
    setTotalAbsent(totalAbsent + abs);
  };
  const scrollToLast= () =>{
    if(lastStdRef.current){
      lastStdRef.current.scrollIntoView({behavior:"smooth"});}
    }
   


  return (
    <>
      <h1>Welcome to GSG course</h1>
      <AddForm onSubmit={Handeladdstudent} />
      <button onClick={removeLast}>Remove Last Student</button>
      <button onClick={scrollToLast}>scroll</button>

   
   
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
  <div ref={lastStdRef}></div>
    </>
   
  );}


export default App;
