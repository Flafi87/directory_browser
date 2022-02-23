import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import FolderIcons from "./FolderIcons.jsx";
import FileIcons from "./FileIcons.jsx";
import { useStyles } from "./style.js";
import DirectoryPath from "./DirectoryPath.jsx";
import ErrorModal from "./ErrorModal.jsx";
import EmptyDirectory from "./EmptyDirectory.jsx";

const MainWindow = () => {
  const { loading, files, directories } = useSelector(
    (state) => state.directory
  );

  const classes = useStyles();

  const content = loading ? (
    <CircularProgress className={classes.progress} />
  ) : (
    <>
        <FolderIcons iconStyle={classes.iconStyle} />
        <FileIcons iconStyle={classes.iconStyle} />
        <EmptyDirectory />
    </>
  );

  return (
    <Box className={classes.dashboard}>
      <Box className={classes.path}>
        <DirectoryPath />
      </Box>
      <Box className={classes.fileLocation}>
        {content}
      </Box>
      <ErrorModal
        errorModalButtonContainer={classes.errorModalButtonContainer}
      />
    </Box>
  );
};

export default MainWindow;
