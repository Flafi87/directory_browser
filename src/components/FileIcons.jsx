import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import FileIcon from "../icons/file.svg";
import ImageIcon from "../icons/image.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FileIcons = () => {
    const { files } = useSelector((state) => state.directory);
  return (files.map((file, item) => {
    const { name, extension, visibleName } = file;
    if (extension === "jpg") {
      return (
        <Box key={name + item}>
          <img src={ImageIcon} alt={name} />
          <Typography>{visibleName}</Typography>
        </Box>
      );
    }
    return (
      <Box key={name + item}>
        <img src={FileIcon} alt={name} />
        <Typography>{visibleName}</Typography>
      </Box>
    );
  }));
};

FileIcons.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
      visibleName: PropTypes.string.isRequired,
    })
  ),
};

export default FileIcons;
