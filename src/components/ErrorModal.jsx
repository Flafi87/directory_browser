import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import store from "../redux/store/store.js";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { clearErrorReload } from "../redux/actions/index.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ErrorModal = ({ errorModalButtonContainer }) => {
  const { error, errorModal } = useSelector((state) => state.errorLog);

  return (
    <Modal
      open={errorModal}
      onClose={() => store.dispatch(clearErrorReload())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Error
        </Typography>
        <Typography id="modal-modal-description">{error}</Typography>
        <Box className={errorModalButtonContainer}>
          <Button
            variant="contained"
            onClick={() => store.dispatch(clearErrorReload())}
          >
            Reload
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ErrorModal;
