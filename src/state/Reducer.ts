export const ADD_STUDENT = "ADD_STUDENT";
export const REMOVE_LAST_STUDENT = "REMOVE_LAST_STUDENT";
export const UPDATE_ABSENT = "UPDATE_ABSENT";

export const initialState = {
  studentsList: [],
  totalAbsent: 0,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_STUDENT:
      return { ...state, studentsList: [...state.studentsList, action.payload] };

    case REMOVE_LAST_STUDENT:
      const updatedList = [...state.studentsList];
      updatedList.pop();
      return { ...state, studentsList: updatedList };

    case UPDATE_ABSENT:
      return { ...state, totalAbsent: state.totalAbsent + action.payload };

    default:
      return state;
  }
};
