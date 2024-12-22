import CoursesList from '../CoursesList/CoursesList.Componants';
import'./Student.css'
interface IProps{
  name:string;
  age:number;
  isGraduate:boolean;
  list:string[]
}
const Student = (props:IProps)=>{
    return (
    <div className='std-wrapper'>

    { "StudentName:"+props.name.toLocaleUpperCase() +"//" + "age:"+props.age+"//"+"IsGraduated:"+props.isGraduate.toString()}
    <CoursesList list={props.list} />

    <hr/>
    </div>)
  
  };

  export default Student;
