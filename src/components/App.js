import React, { useEffect } from "react";
import { fetchDirectory } from "../redux/actions/index";
import store from "../redux/store/store.js";
import MainWindow from "./MainWindow.jsx";

const App = () => {
  useEffect(() => {
    store.dispatch(fetchDirectory());
  }, []);

  return <MainWindow />;
};

export default App;
