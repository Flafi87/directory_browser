import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const EmptyDirectory = () => {
  const { loading, files, directories } = useSelector(
    (state) => state.directory
  );
  if (files.length === 0 && directories.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingTop: "30px",
        }}
      >
        <Typography>Unfortunately this directory is empty :(</Typography>
      </Box>
    );
  } else {
    return null;
  }
};

export default EmptyDirectory;
