import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import FileIcon from "../icons/file.svg";
import ImageIcon from "../icons/image.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FileIcons = ({ iconStyle }) => {
  const { files } = useSelector((state) => state.directory);
  return files.map((file, item) => {
    const { name, extension, visibleName } = file;
    const icon =
      extension === "png" || extension === "jpg" ? <ImageIcon /> : <FileIcon />;

    return (
      <Box key={name + item} className={iconStyle}>
        {icon}
        <Typography>{visibleName}</Typography>
      </Box>
    );
  });
};

FileIcons.propTypes = {
  iconStyle: PropTypes.string.isRequired,
};

export default FileIcons;
