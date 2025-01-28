import "./AddForm.css";
import { Istudent } from "../../types";
import CoursesListForm from "../Courses-ListForm/CoursesListForm.componants";
import useAddForm from "../../hooks/AddForm";

interface IProps {
  onSubmit: (std: Istudent) => void;
}

const AddForm = (props: IProps) => {
  const {
    student,
    errorList,
    memoizedErrorList,
    handleChange,
    handleSubmit,
    handleClear,
    handleCoursesChange,
  } = useAddForm({ onSubmit: props.onSubmit });

  return (
    <div className="container">
      <div>
        <label htmlFor="name">Student Name:</label>
        <input
          id="name"
          type="text"
          value={student.name}
          onChange={(e) => handleChange("name", e.target.value)}
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
          onChange={(e) => handleChange("age", Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="isGraduate">Student Graduate:</label>
        <input
          id="isGraduate"
          type="checkbox"
          checked={student.isGraduate}
          onChange={(e) => handleChange("isGraduate", e.target.checked)}
        />
      </div>
      <div>
        <CoursesListForm onSubmit={handleCoursesChange} />
      </div>
      <div className="Actions">
        <button
          onClick={handleSubmit}
          style={{ backgroundColor: memoizedErrorList.length ? "red" : "green" }}
        >
          Submit
        </button>
        <button onClick={handleClear}>Clear</button>
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
