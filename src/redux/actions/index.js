import {
  GET_DIRECTORY,
  BACK_DIRECTORY,
  LOADING,
  CREATE_ERROR,
  CLEAR_ERROR,
} from "../types";

export const fetchDirectory =
  (id = "") =>
  (dispatch, getState) => {
    const { directory } = getState();
    const { loading } = directory;

    if (!loading) {
      if (id === "") {
        dispatch({
          type: LOADING,
          payload: true,
        });
      }
      fetch(
        `https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/${id}`
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          dispatch({
            type: LOADING,
            payload: false,
          });
          dispatch({
            type: CREATE_ERROR,
            payload: "Error 404 fetching directory",
          });
        })
        .then((data) => {
          const { name, files, directories } = data;
          dispatch({
            type: GET_DIRECTORY,
            payload: {
              location: name,
              files,
              directories,
              id,
            },
          });
        })
        .catch((err) => {
          dispatch({
            type: LOADING,
            payload: false,
          });
          dispatch({
            type: CREATE_ERROR,
            payload: "Error fetching directory",
          });
        });
    }
  };

export const jumpBackDirectory =
  (id = 0) =>
  (dispatch, getState) => {
    const { directory } = getState();
    const { path, loading } = directory;
    const lastLocationId = path[path.length - 1].id;
    if (path.length > 1 && (lastLocationId !== id) & !loading) {
      dispatch({
        type: LOADING,
        payload: true,
      });
      fetch(
        `https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/${path[id].id}`
      )
        .then((response) => response.json())
        .then((data) => {
          const { name, files, directories } = data;
          path.splice(-path.length + id + 1);
          dispatch({
            type: BACK_DIRECTORY,
            payload: {
              location: name,
              files,
              directories,
              id,
              path,
            },
          });
        })
        .catch((err) => {
          dispatch({
            type: LOADING,
            payload: false,
          });
          dispatch({
            type: CREATE_ERROR,
            payload: "Error fetching directory",
          });
        });
    }
  };

export const clearErrorReload = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
    payload: "",
  });
  dispatch(fetchDirectory());
};
