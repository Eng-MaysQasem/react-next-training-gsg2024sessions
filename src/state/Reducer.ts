import { Istudent } from "../types";

// Action types definition
export const ADD_STUDENT = "ADD_STUDENT";  // Action to add a student
export const REMOVE_LAST_STUDENT = "REMOVE_LAST_STUDENT";  // Action to remove the last student
export const UPDATE_ABSENT = "UPDATE_ABSENT";  // Action to update the total absents

// Initial state type definition
export const initialState = {
  studentsList: [] as Istudent[],  // List of students
  totalAbsent: 0,  // Total number of absents
};

// Action type interface
interface Action {
  type: string;  // The type of action being dispatched
  payload?: any;  // The data associated with the action
}

// The reducer function that manages changes to the state
export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_STUDENT:
      // Adds a new student to the students list
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
      };
    case REMOVE_LAST_STUDENT:
      // Removes the last student from the students list
      return {
        ...state,
        studentsList: state.studentsList.slice(0, -1),
      };
    case UPDATE_ABSENT:
      // Updates the total absents count
      return {
        ...state,
        totalAbsent: state.totalAbsent + action.payload,
      };
    default:
      // Returns the current state if no action matches
      return state;
  }
};
