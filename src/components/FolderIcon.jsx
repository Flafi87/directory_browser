import React, { useCallback, useState } from "react";
import store from "../redux/store/store.js";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FolderIcon from "../icons/folder.svg";
import { fetchDirectory } from "../redux/actions/index.js";

const FolderIcons = ({ folder, iconStyle }) => {
  const { id, name } = folder;

  /**This is to avoid fast clicking */
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback((id) => {
    if (!clicked) {
      setClicked(true);
      store.dispatch(fetchDirectory(id));
      return;
    }
  });

  return (
    <Box onClick={() => handleClick(id)} key={id} className={iconStyle}>
      <FolderIcon />
      <Typography>{name}</Typography>
    </Box>
  );
};

FolderIcons.propTypes = {
  iconStyle: PropTypes.string.isRequired,
};

export default FolderIcons;
