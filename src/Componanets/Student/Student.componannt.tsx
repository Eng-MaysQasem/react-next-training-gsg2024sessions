import { useEffect, useRef, useState } from "react";
import CoursesList from "../CoursesList/CoursesList.Componants";
import "./Student.css";
import { Istudent } from "../../types";

interface IProps {
  name: string;
  age: number;
  isGraduate: boolean;
  list: string[];
  onAbsentChange: (name: string, abs: number) => void;
}

const Student = (props: IProps) => {
  const { name, age, isGraduate, list, onAbsentChange } = props;

  const [abs, setAbs] = useState(0);

  useEffect(() => {
    console.log("hello from student component");

    return () => {
//this code will be excute when unmount
      console.log(`student: ${name} has been deleted`);
    };
  }, [name]);

  const addAbsent = () => {
    setAbs(abs + 1);
    onAbsentChange(name, abs + 1);
  };

  const removeAbsent = () => {
    setAbs(abs - 1);
    onAbsentChange(name, abs - 1);
  };

  const resetAbsent = () => {
    setAbs(0);
    onAbsentChange(name, -abs);
  };
 

  return (
    <div className="std-wrapper">
      <p>
        <div className="label">Student Name:</div> {name.toLocaleUpperCase()}
      </p>
      <p>
        <div className="label">Age:</div> {age}
      </p>
      <p>
        <div
          className="label"
          style={{ color: isGraduate ? "green" : "red" }}
        >
          Is Graduated:
        </div>{" "}
        {isGraduate.toString()}
      </p>
      <p>
        <div className="label">Absents:</div> {abs}
      </p>
      <button onClick={addAbsent}>+</button>
      <button onClick={resetAbsent}>Reset Absent</button>
      <button onClick={removeAbsent}>-</button>

      <CoursesList list={list} />
      <hr />
    </div>
  );
};

export default Student;
