import { useState } from "react";
import "./AddForm.css";
import { Istudent } from "../../types";

const AddForm = () => {
  const [student, setStudent] = useState<Istudent>({
    id: "",
    name: "",
    age: 0,
    isGraduate: false,
    courseList: [],
  });

  const handelChange = (field: keyof Istudent, value: any) => {
    setStudent({ ...student, [field]: value });
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Student Name:</label>
        <input
          id="name"
          type="text"
          value={student.name}
          onChange={(e) => handelChange("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Student Age:</label>
        <input
          id="age"
          type="number"
          max={30}
          min={17}
          value={student.age}
          onChange={(e) => handelChange("age", Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="isGraduate">Student Graduate:</label>
        <input
          id="isGraduate"
          type="checkbox"
          checked={student.isGraduate}
          onChange={(e) => handelChange("isGraduate", e.target.checked)}
        />
      </div>
    </div>
  );
};

export default AddForm;
