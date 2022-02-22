import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import FolderIcons from "./FolderIcons.jsx";
import FileIcons from "./FileIcons.jsx";
import DirectoryPath from "./DirectoryPath.jsx";

const MainWindow = () => {
  const loading = useSelector((state) => state.directory.loading);

  if (!loading) {
    return (
      <Box
        sx={{
          bgcolor: "#222530",
          width: "100vw",
          height: "100vh",
          color: "white",
          padding: "10px",
        }}
      >
        <Box display={"flex"}><DirectoryPath/></Box>
        <Box display={"flex"} flexWrap={"wrap"} sx={{ padding: "10px" }}>
          <FolderIcons />
          <FileIcons />
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#222530",
        width: "100vw",
        height: "100vh",
      }}
    >
      <CircularProgress sx={{position: "absolute",top:"50%"}}/>
    </Box>
  );
};

export default MainWindow;
