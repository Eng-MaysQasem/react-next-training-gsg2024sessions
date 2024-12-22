
import './App.css';
import Student from './Componanets/Student/Student.componannt';
const CoursesList=['React','HTML','CSS'];


function App() {
 

  return (
    <>
    
      <h1>Welcome to GSG course</h1>
      <Student name="Mays Qasem" age={23} isGraduate={true} list={CoursesList}/>
      <Student name="Areej Qasem"age={21}isGraduate={false}list={CoursesList}/>
      <Student name="Sama Qasem"age={18-2}isGraduate={!true}list={CoursesList}/>


 
    </>
  )
}

export default App;
