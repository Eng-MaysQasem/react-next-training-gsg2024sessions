import { useState } from 'react';
import CoursesList from '../CoursesList/CoursesList.Componants';
import'./Student.css'
import { Istudent } from '../../types';
interface IProps{
  name:string;
  age:number;
  isGraduate:boolean;
  list:string[]
}
const Student = (props:IProps)=>{
  //let abs=0;
  const[abs,setAbs]=useState(0);
  const addAbsent=()=>{
    setAbs(abs+1);
  }
  const removAbsent=()=>{
    setAbs(abs-1);
  }
  const RestAbsent=()=>{
    setAbs(0);
  }
  
    return (
      <div className='std-wrapper'>
      <p>
        <div className="label">Student Name:</div> {props.name.toLocaleUpperCase()}
      </p>
      <p>
        <div className="label">Age:</div> {props.age}
      </p>
      <p>
        <div className="label">Is Graduated:</div> {props.isGraduate.toString()}
      </p>
      <p>
        <div className="label">Absents:</div> {abs}
      </p>
      <button onClick={addAbsent}>+</button>

      <button onClick={RestAbsent}>Rest Absent</button>
      <button onClick={removAbsent}>-</button>

      <CoursesList list={props.list} />
      <hr />
    </div>
    )
  
  };

  export default Student;
