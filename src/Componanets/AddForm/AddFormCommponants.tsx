import { useState } from "react";
import "./AddForm.css";
import { Istudent } from "../../types";
import CoursesListForm from "../Courses-ListForm/CoursesListForm.componants";
import { validateStudent } from "../../ulills/Validation";

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
  const [errorList, setErrorList] = useState<string[]>([]);

  const handelChange = (field: keyof Istudent, value: any) => {
    setStudent({ ...student, [field]: value });
  };

  const handelSubmit = () => {
    const newStudent: Istudent = { ...student, id: Date.now().toString() };
    const errors = validateStudent(newStudent);

    if (errors.length > 0) {
      setErrorList(errors);
    } else {
      setErrorList([]);
      props.onSubmit(newStudent);
      handelClear();
    }
  };

  const handelClear = () => {
    setStudent({ id: "", name: "", age: 0, isGraduate: false, courseList: [] });
  };
  const handelCoursesChange = (courseList: string[]) => {
    setStudent({ ...student, courseList });
  };
return (
    <div className="container">
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
      <div>
        <CoursesListForm onSubmit={handelCoursesChange} />
      </div>
      <div className="Actions">
        <button onClick={handelSubmit} style={{backgroundColor:errorList.length?'red':'green'}}>Submit</button>
        <button onClick={handelClear}>Clear</button>
      </div>
      
      {Boolean(errorList.length) && (
        <div>
          <h4>You have the following errors:</h4>
          {errorList.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddForm;

