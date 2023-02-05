import {
  LOAD_RESULTS,
  LOAD_MODULES,
  LOAD_DEPARTMENTS,
  LOAD_STUDENTS,
  LOAD_STAFF,
  LOAD_PROGRAMS,
  REGISTER_STAFF,
  REGISTER_STUDENT,
  SAVE_RESULTS,
} from "../actionTypes/actionTypes";

const initialState = {
  results: [],
  staff: [],
  departments: [],
  students: [],
  modules: [],
  programs: [],
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case LOAD_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
      };
    case LOAD_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case LOAD_STAFF:
      return {
        ...state,
        staff: action.payload,
      };
    case LOAD_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
      };
    case LOAD_MODULES:
      return {
        ...state,
        modules: action.payload,
      };
    default:
      return state;
  }
};

export default resultsReducer;
