import { GET_DIRECTORY, BACK_DIRECTORY } from "../types";

const getExtension = (str) => {
  return str.split(".")[1];
};

const shortName = (name) => {
  if (name.length >= 11) {
    return name.substring(0, 8) + "...";
  }
  return name;
};

/**
 * File extension extract and name shortening middleware
 */
export const fileExtension =
  () =>
  (next) =>
  ({ type, payload }) => {
    if (type === GET_DIRECTORY || type === BACK_DIRECTORY) {
      const filesWithExtension = payload.files.map((file) => {
        const extension = getExtension(file.name) || "file";
        const visibleName = shortName(file.name);
        return {
          name: file.name,
          extension,
          visibleName,
        };
      });
      return next({
        type,
        payload: {
          ...payload,
          files: filesWithExtension,
        },
      });
    }
    return next({ type, payload });
  };
