import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Main from "../src/Screens/Main.Screens";
import About from "../src/Screens/About.Screens";
import NotFound from "../src/Screens/NotFound.Screens";
import StudentDetails from "./Screens/StudentDetails.Screens";
import {
  reducer,
  initialState,
  ADD_STUDENT,
  REMOVE_LAST_STUDENT,
  UPDATE_ABSENT,
} from "./state/Reducer";
import useLocalStorage from "./hooks/localStorage.hooks";
import "./App.css";


function App() {
  // State Management
  const [state, dispatch] = useReducer(reducer, initialState);
  const { storedData: studentsList, setStoredData } = useLocalStorage(
    state.studentsList,
    "students-list"
  );

  // Handlers
  const handleAbsentChange = (name, abs) => {
    dispatch({ type: UPDATE_ABSENT, payload: abs });
  };

  const handleAddStudent = (newStudent) => {
    dispatch({ type: ADD_STUDENT, payload: newStudent });
  };

  const handleRemoveLastStudent = () => {
    dispatch({ type: REMOVE_LAST_STUDENT });
  };

  useEffect(() => {
    setStoredData(state.studentsList);
  }, [state.studentsList, setStoredData]);

  // JSX
  return (
    <div className="app-container">
      <h1>Welcome to GSG Course</h1>

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/random">Invalid Page</Link> {/* Test 404 */}
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
          <Route path="/student/:id" element={<StudentDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
