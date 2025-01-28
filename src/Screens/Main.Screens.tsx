import React, { useState, useReducer, useEffect, useRef } from "react";
import AddForm from "../Componanets/AddForm/AddFormCommponants";
import Student from "../Componanets/Student/Student.componannt";
import { reducer, initialState, ADD_STUDENT, REMOVE_LAST_STUDENT, UPDATE_ABSENT } from "../state/Reducer"; 
import useLocalStorage from "../hooks/localStorage.hooks"; 

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { storedData: studentsList, setStoredData } = useLocalStorage(state.studentsList, "students-list");
  const lastStdRef = useRef<HTMLDivElement>(null);

  const handelAbsentChange = (name: string, abs: number) => {
    dispatch({ type: UPDATE_ABSENT, payload: abs });
  };

  const Handeladdstudent = (newStudent: Istudent) => {
    dispatch({ type: ADD_STUDENT, payload: newStudent });
  };

  const removeLast = () => {
    dispatch({ type: REMOVE_LAST_STUDENT });
  };

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setStoredData(state.studentsList);
  }, [state.studentsList, setStoredData]);

  return (
    <>
      <h1>Welcome to GSG course</h1>
      <AddForm onSubmit={Handeladdstudent} />
      <button onClick={removeLast}>Remove Last Student</button>
      <button onClick={scrollToLast}>Scroll</button>
      <b>Total Absent: {state.totalAbsent}</b>

      {studentsList.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          age={student.age}
          isGraduate={student.isGraduate}
          list={student.courseList}
          onAbsentChange={handelAbsentChange}
        />
      ))}
      <div ref={lastStdRef}></div>
    </>
  );
};

export default Main;
