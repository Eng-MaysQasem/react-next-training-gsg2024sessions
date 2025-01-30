import React, { useState, useReducer, useEffect, useRef } from "react";
import AddForm from "../Componanets/AddForm/AddFormCommponants";
import Student from "../Componanets/Student/Student.componannt";
import { reducer, initialState, ADD_STUDENT, REMOVE_LAST_STUDENT, UPDATE_ABSENT } from "../state/Reducer"; 
import useLocalStorage from "../hooks/localStorage.hooks"; 
import { Istudent } from "../types";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { storedData: studentsList, setStoredData } = useLocalStorage(state.studentsList, "students-list");
  const lastStdRef = useRef<HTMLDivElement>(null);
  const [params, setParams] = useSearchParams();
  
  // State to store the filtered list of students based on search query
  const [filteredStudents, setFilteredStudents] = useState<Istudent[]>(studentsList);

  const handleAbsentChange = (name: string, abs: number) => {
    dispatch({ type: UPDATE_ABSENT, payload: abs });
  };

  const handleAddStudent = (newStudent: Istudent) => {
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

  // Save students list to localStorage whenever it changes
  useEffect(() => {
    setStoredData(state.studentsList);
  }, [state.studentsList, setStoredData]);

  // Handle search input changes
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    params.set('q', query);
    setParams(params);
  };

  // Update the filtered students list based on search query
  useEffect(() => {
    const query = params.get('q') || '';
    const filtered = studentsList.filter(std =>
      std.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [params, studentsList]);

  return (
    <>
      <AddForm onSubmit={handleAddStudent} />
      <button onClick={removeLast}>Remove Last Student</button>
      <button onClick={scrollToLast}>Scroll</button>
      <b>Total Absent: {state.totalAbsent}</b>
      
      <div>
        <input placeholder="Search" type="text" onChange={handleSearch} />
      </div>

      {filteredStudents.map((student) => (
        <Student
          id={student.id}  // Ensure the `id` prop is passed to Student component
          key={student.id}
          name={student.name}
          age={student.age}
          isGraduate={student.isGraduate}
          list={student.courseList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
      
      <div ref={lastStdRef}></div>
    </>
  );
};

export default Main;
