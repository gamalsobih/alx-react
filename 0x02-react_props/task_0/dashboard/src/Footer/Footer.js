import React from "react";
import "./footer.css";

function Footer() {
return (
    <div className="App-footer">
    Copyright {getFullYear()} - {getFooterCopy()}
  </div>    
)

}