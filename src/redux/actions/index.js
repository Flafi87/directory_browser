import { GET_DIRECTORY, BACK_DIRECTORY } from "../types";

export const fetchDirectory =
  (id = "") =>
  (dispatch) => {
    fetch(
      `https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/${id}`
    )
      .then((response) => response.json())
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
      });
  };

export const jumpBackDirectory =
  (id = 0) =>
  (dispatch, getState) => {
    const { directory } = getState();
    const { path } = directory;
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
      });
  };
