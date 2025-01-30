import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoursesList from "../CoursesList/CoursesList.Componants";
import "./Student.css";

interface IProps {
  id: string;
  name: string;
  age: number;
  isGraduate: boolean;
  list: string[];
  onAbsentChange: (id: string, abs: number) => void;
}

const Student = (props: IProps) => {
  const { id, name, age, isGraduate, list, onAbsentChange } = props;
  const [abs, setAbs] = useState(0);

  useEffect(() => {
    console.log("Student component mounted for:", name);

    return () => {
      console.log(`Student: ${name} has been removed`);
    };
  }, [name]);

  const handleAbsentChange = (operation: "add" | "remove" | "reset") => {
    let newAbs = abs;

    if (operation === "add") newAbs = abs + 1;
    else if (operation === "remove") newAbs = Math.max(0, abs - 1);
    else if (operation === "reset") newAbs = 0;

    setAbs(newAbs);
    onAbsentChange(id, newAbs);
  };

  return (
    <div className="std-wrapper">
      <p>
        <div className="label">Student Name:</div>
        <Link to={`/student/${id}`} style={{ textDecoration: "none", color: "blue" }}>
          {name.toLocaleUpperCase()}
        </Link>
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
      <button onClick={() => handleAbsentChange("add")}>+</button>
      <button onClick={() => handleAbsentChange("reset")}>Reset Absent</button>
      <button onClick={() => handleAbsentChange("remove")}>-</button>

      <CoursesList list={list} />
      <hr />
    </div>
  );
};

export default Student;
