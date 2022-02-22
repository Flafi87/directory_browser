import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  dashboard: {
    backgroundColor: "#222530",
    color: "white",
    padding: "10px",
    width: "100vw",
    height: "100vh",
  },
  path: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  fileLocation: {
    display: "flex",
    flexWrap: "wrap",
  },
  progress: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  iconStyle: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    width: "70px",
    height: "70px",
    margin: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  errorModalButtonContainer: {
    display: "flex",
    flexDirection: "row-reverse",
  },
});
