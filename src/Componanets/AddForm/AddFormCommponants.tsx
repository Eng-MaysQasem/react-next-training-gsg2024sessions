import { useState } from "react";
import "./AddForm.css";
import { Istudent } from "../../types";

interface Iprops {
  onSubmit: (std: Istudent) => void;
}

const AddForm = (props: Iprops) => {
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

  const handelSubmit = () => {
    const newStudent: Istudent = { ...student, id: Date.now().toString() };
    props.onSubmit(newStudent);
    handelClear();
  };

  const handelClear = () => {
    setStudent({ id: "", name: "", age: 0, isGraduate: false, courseList: [] });
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
      <div className="Actions">
        <button onClick={handelSubmit}>Submit</button>
        <button onClick={handelClear}>Clear</button>
      </div>
    </div>
  );
};

export default AddForm;
