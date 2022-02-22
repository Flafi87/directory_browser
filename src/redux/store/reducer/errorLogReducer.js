import { CLEAR_ERROR, CREATE_ERROR } from "../../types";

const initialState = {
  error: "",
  errorModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ERROR:
      return {
        ...state,
        error: action.payload,
        errorModal: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
        errorModal: false,
      };
    default:
      return state;
  }
};
