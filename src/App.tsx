import React, { useState, useEffect, useRef, useReducer } from "react";
import Main from "../src/Screens/Main.Screens";
import About from "../src/Screens/About.Screens";
import NotFound from "../src/Screens/NotFound.Screens";
import { reducer, initialState, ADD_STUDENT, REMOVE_LAST_STUDENT, UPDATE_ABSENT } from "./state/Reducer";
import useLocalStorage from "./hooks/localStorage.hooks";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { storedData: studentsList, setStoredData } = useLocalStorage(state.studentsList, "students-list");
  const [currentPage, setCurrentPage] = useState("main");

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

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <h1>Welcome to GSG course</h1>
      <nav>
        <a href="/main" onClick={(e) => { e.preventDefault(); handleNavigation("main"); }}>Home Page</a>
        <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigation("about"); }}>About Us Page</a>
        <a href="/random" onClick={(e) => { e.preventDefault(); handleNavigation("random"); }}>Invalid Page</a> {/* لتجربة 404 */}
      </nav>

      <div className="content">
        {currentPage === "main" ? (
          <Main
            state={state}
            dispatch={dispatch}
            studentsList={studentsList}
            handelAbsentChange={handelAbsentChange}
            Handeladdstudent={Handeladdstudent}
            removeLast={removeLast}
            scrollToLast={scrollToLast}
          />
        ) : currentPage === "about" ? (
          <About />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default App;
