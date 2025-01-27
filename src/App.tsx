import { useReducer, useEffect, useRef } from "react";
import "./App.css";
import Student from "./Componanets/Student/Student.componannt";
import { Istudent } from "./types";
import AddForm from "./Componanets/AddForm/AddFormCommponants";
import useLocalStorage from "./hooks/localStorage.hooks";
import { reducer, initialState, ADD_STUDENT, REMOVE_LAST_STUDENT, UPDATE_ABSENT } from "../src/state/reducer"; // Importing the reducer

const CoursesList = ["React", "HTML", "CSS"];

function App() {
  // Using the useReducer hook with the reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState); 

  // Custom hook to persist student data in local storage
  const { storedData: studentsList, setStoredData } = useLocalStorage(state.studentsList, "students-list");
  
  const lastStdRef = useRef<HTMLDivElement>(null);

  // Function to handle absence changes and dispatch the action to update the total absents
  const handelAbsentChange = (name: string, abs: number) => {
    dispatch({ type: UPDATE_ABSENT, payload: abs });
  };

  // Function to handle adding a new student and dispatch the action to add the student to the list
  const Handeladdstudent = (newStudent: Istudent) => {
    dispatch({ type: ADD_STUDENT, payload: newStudent });
  };

  // Function to remove the last student from the list and dispatch the action
  const removeLast = () => {
    dispatch({ type: REMOVE_LAST_STUDENT });
  };

  // Function to scroll to the last student
  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect hook to update the local storage whenever the students list changes
  useEffect(() => {
    setStoredData(state.studentsList); // Save updated students list to local storage
  }, [state.studentsList, setStoredData]);

  return (
    <>
      <h1>Welcome to GSG course</h1>
      <AddForm onSubmit={Handeladdstudent} /> {/* Form to add a new student */}
      <button onClick={removeLast}>Remove Last Student</button>
      <button onClick={scrollToLast}>scroll</button>
      <b>Total Absent: {state.totalAbsent}</b>

      {/* Rendering the list of students */}
      {studentsList.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          age={student.age}
          isGraduate={student.isGraduate}
          list={student.courseList}
          onAbsentChange={handelAbsentChange}  // Passing the absence change handler as prop
        />
      ))}
      <div ref={lastStdRef}></div>
    </>
  );
}

export default App;
