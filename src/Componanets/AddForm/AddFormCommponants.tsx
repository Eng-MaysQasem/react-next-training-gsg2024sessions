import { useState } from "react";
import "./AddForm.css";
const AddForm = () => {
    const[name,setName]=useState<string>("");
    const[age,setAge]=useState<number>(0);
    const[graduate,setGraduate]=useState<boolean>(false);
    const handelNamechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     setName(e.target.value);
    }
    const handelAgechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setAge(Number(e.target.value));
       }
       const handelGraduatechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setGraduate(e.target.checked);
       }
  return (
    <div>
      <div>
        <label htmlFor="name">Student Name:</label>
        <input id="name" type="text" onChange={handelNamechange} />
      </div>
      <div>
        <label htmlFor="age">Student Age:</label>
        <input id="age" type="number"max={30} min={17} onChange={handelAgechange} />
      </div>
   
      <div>
        <label htmlFor="Graduate">Student Graduate:</label>
        <input id="Graduate" type="checkbox" onChange={handelGraduatechange}/>
      </div>
    </div>
  );
};
export default AddForm;
