import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Notifications from "../Notifications/Notifications";
import Header from "../header/header";
import Footer from "../Footer/Footer";


function App() {
  return (      
    <>
    <Notifications className="Notifications"></Notifications>
    <div className="App">
      <Header className="App-header"></Header>
      <login className="App-body"></login>
      <Footer className="App-footer"></Footer>    
    </div> 
      </>
  );
}

export default App;
