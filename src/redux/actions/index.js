import {
  GET_DIRECTORY,
  BACK_DIRECTORY,
  LOADING,
  CREATE_ERROR,
  CLEAR_ERROR,
} from "../types";
import axios from "axios";

const { API } = process.env;

const request = axios.create({
  baseURL: API,
  timeout: 1000,
});

const createError = (dispatch, error) => {
  dispatch({
    type: LOADING,
    payload: false,
  });
  dispatch({
    type: CREATE_ERROR,
    payload: error,
  });
};

export const fetchDirectory =
  (id = "") =>
  (dispatch, getState) => {
    const { directory } = getState();
    const { loading } = directory;

    if (id === "") {
      dispatch({
        type: LOADING,
        payload: true,
      });
    }
    request({
      url: `/${id}`,
    }).then(({ status, data }) => {
      if (status === 200 && data) {
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
        return;
      }
      createError(dispatch, "Error fetching directory");
    });
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
      request({
        url: `/${path[id].id}`,
      })
        .then(({ data, status }) => {
          if (status === 200 && data) {
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
          }
        })
        .catch(() => {
          createError(dispatch, "Error fetching directory");
        });
    }
  };

export const clearErrorReload = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
  dispatch(fetchDirectory());
};
