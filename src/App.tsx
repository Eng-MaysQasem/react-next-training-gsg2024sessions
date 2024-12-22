
import './App.css';
import Student from './Componanets/Student/Student.componannt';


function App() {
 

  return (
    <>
    
      <h1>Welcome to GSG course</h1>
      <Student name="Mays Qasem" age={23} isGraduate={true}/>
      <Student name="Areej Qasem"age={21}isGraduate={false}/>
      <Student name="Sama Qasem"age={18-2}isGraduate={!true}/>


 
    </>
  )
}

export default App;
