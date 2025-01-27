import { useRef, useState } from "react";
import './CoursesListForm.css';

interface CoursesListFormProps {
  onSubmit: (courses: string[]) => void;
}

const CoursesListForm = (props: CoursesListFormProps) => {
  const [coursesList, setCoursesList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);


  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const courseName = e.currentTarget["coursename"].value;
    if (courseName.trim()) {
      const newCoursesList = [...coursesList, courseName];
      setCoursesList(newCoursesList);
      props.onSubmit(newCoursesList);

      e.currentTarget.reset(); // Clear the input field after submission
    }
    if(inputRef.current){
      inputRef.current.value="";
    }
  };

  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <label htmlFor="cName">Course Name:</label>
        <input type="text" id="cName" name="coursename" ref={inputRef}/>
        <button type="submit">Add Course</button>
      </form>
      <ul>
        {coursesList.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesListForm;