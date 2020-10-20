import React from 'react';
import './App.css';
import routers from "./routes/routes";
import { useRoutes } from "react-router-dom";


const App = () => {
  const routing = useRoutes(routers);
  return <div>{routing}</div>;
  
};

export default App;
