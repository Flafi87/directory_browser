import { GET_DIRECTORY, BACK_DIRECTORY, LOADING } from "../../types";

const initialState = {
  files: [],
  directories: [],
  location: "root",
  path: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DIRECTORY:
      return {
        ...state,
        files: action.payload.files,
        directories: action.payload.directories,
        location: action.payload.location,
        path: [
          ...state.path,
          { location: action.payload.location, id: action.payload.id },
        ],
        loading: false,
      };
    case BACK_DIRECTORY:
      return {
        ...state,
        files: action.payload.files,
        directories: action.payload.directories,
        location: action.payload.location,
        path: [...action.payload.path],
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
