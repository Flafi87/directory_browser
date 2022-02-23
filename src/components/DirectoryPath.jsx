import React, {useCallback} from "react";
import store from "../redux/store/store.js";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { jumpBackDirectory } from "../redux/actions/index.js";

const DirectoryPath = () => {
  const path = useSelector((state) => state.directory.path);

  const handleBackDirectory = useCallback((item) => {
    store.dispatch(jumpBackDirectory(item));
  });
  return path.map((directory, index) => {
    const { location } = directory;
    if (path.length === index + 1) {
      return (
        <Typography key={location} sx={{ cursor: "context-menu" }}>
          {location}&nbsp;
        </Typography>
      );
    } else {
      return (
        <Typography
          onClick={() => handleBackDirectory(index)}
          key={location}
          sx={{ cursor: "pointer" }}
        >
          {location} / &nbsp;
        </Typography>
      );
    }
  });
};

export default DirectoryPath;
