import'./Student.css'
interface IProps{
  name:string;
  age:number;
  isGraduate:boolean;
}
const Student = (props:IProps)=>{
    return (
    <div className='std-wrapper'>

    { "StudentName:"+props.name.toLocaleUpperCase() +"//" + "age:"+props.age+"//"+"IsGraduated:"+props.isGraduate.toString()}

    <hr/>
    </div>)
  
  };

  export default Student;
