
import './App.css';
import Student from './Componanets/Student/Student.componannt';
import {Istudent} from './types';
const CoursesList=['React','HTML','CSS'];

const studentsList: Array<Istudent> = [
  {
    id: "1",
    name: "Mays Qasem",
    age: 23,
    isGraduate: true,
    courseList: CoursesList,
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
    courseList: CoursesList,
  },
];
interface Istudent{
  id:string;
  name:string;
  age:number;
  isGraduate:boolean;
  courseList: string[];
}


function App() {
  return (
    <>
      <h1>Welcome to GSG course</h1>
      {
        studentsList.map((student) => (
          <Student
          key={student.id}
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
