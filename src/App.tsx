
import './App.css';
import Student from './Componanets/Student/Student.componannt';
//import {Istudent} from './types';
const CoursesList=['React','HTML','CSS'];
//const studentsList:Array<Istudent>=[];
interface Istudent{
  id:string;
  name:string;
  age:number;
  isGraduate:boolean;
  courseList: string[];
}
const studentsList: Array<Istudent> = [
  {
    id: "1",
    name: "Mays Qasem",
    age: 23,
    isGraduate: true,
    courseList: ['css','react'], 
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
    age: 18 - 2, 
    isGraduate: !true, 
    courseList: ['english','e2','e3','e4'], 
  },
];


function App() {
  return (
    <>
      <h1>Welcome to GSG course</h1>
      {
        studentsList.map((student, index) => (
          <Student
            key={index} 
            name={student.name}
            age={student.age}
            isGraduate={student.isGraduate}
            list={student.courseList} 
          />
        ))
      }
    </>
  );
}

export default App;
