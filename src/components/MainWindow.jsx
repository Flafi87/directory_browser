import React from "react";
import store from "../redux/store/store.js";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { width } from "@mui/system";
import Typography from "@mui/material/Typography";
import FileIcon from "../icons/file.svg";
import ImageIcon from "../icons/image.svg";
import FolderIcon from "../icons/folder.svg";
import { fetchDirectory, jumpBackDirectory } from "../redux/actions/index.js";


const MainWindow = () => {
  const loading = useSelector((state) => state.directory.loading);
  const path = useSelector((state) => state.directory.path);
  const { files, directories } = useSelector((state) => state.directory);


  const handleClick = (id) =>{
    store.dispatch(fetchDirectory(id));
  };

  const fileIcons = files.map((file,item) => {
    const {name,extension,visibleName} = file;
    if(extension === "jpg"){
      return(
        <Box key={name+item}>
        <img src={ImageIcon} alt={name} />
        <Typography>{visibleName}</Typography>
      </Box>
      );
    }
    return (
      <Box key={name+item}>
        <img src={FileIcon} alt={name} />
        <Typography>{visibleName}</Typography>
      </Box>
    );
  });

  const directoryIcons = directories.map((folder) => {
    return(
      <Box onClick={()=>handleClick(folder.id)} key={folder.id} sx={{cursor:"pointer"}}>
          <img src={FolderIcon} alt={folder.name} />
        <Typography>{folder.name}</Typography>
      </Box>
    );
  });

  const handleBackDirectory = (item) => {
    store.dispatch(jumpBackDirectory(item));
  };

  const pathLocation = path.map((directory,item) => {
    const {id,location} = directory;
    if(path.length === item +1){
      return <Typography key={location} sx={{cursor:"context-menu"}}>{location}</Typography>;
    }
    else{
      return <Typography onClick={()=>handleBackDirectory(item)} key={location} sx={{cursor:"pointer"}}> {location} /</Typography>;
    }
  });
  if (!loading) {
    return (
      <Box sx={{ bgcolor: "#222530", width: "100vw", height: "100vh", color:"white" ,padding:"10px"}}>
        <Box display={"flex"}>{pathLocation}</Box>
        <Box display={"flex"} flexWrap={"wrap"} sx={{padding:"10px"}}>
        {directoryIcons}
        {fileIcons}
        </Box>
        
      </Box>
    );
  }
  return <div>Loading</div>;
};

export default MainWindow;
