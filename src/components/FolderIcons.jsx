import React from 'react';
import store from "../redux/store/store.js";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FolderIcon from "../icons/folder.svg";
import { fetchDirectory } from "../redux/actions/index.js";

const FolderIcons = () => {
    const {  directories } = useSelector((state) => state.directory);
  
    const handleClick = (id) => {
      store.dispatch(fetchDirectory(id));
    };
    return(
        directories.map((folder) => {
            return (
              <Box
                onClick={() => handleClick(folder.id)}
                key={folder.id}
                sx={{ cursor: "pointer" }}
              >
                <img src={FolderIcon} alt={folder.name} />
                <Typography>{folder.name}</Typography>
              </Box>
            );
        })
    );

};

export default FolderIcons;