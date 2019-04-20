import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img
        <svg  viewBox="50 50 100 100" width = "800" height="800">
          style={{ color: "red" }}
          src={logo}
          className="App-logo"
          alt="logo"
          width="500"
          hight="10"
        /> */}

        <svg  viewBox="50 50 100 100" width = "800" height="800">
        <svg  viewBox="50 50 100 100" width = "800" height="800">
        <svg  viewBox="50 50 100 100" width = "800" height="800">
            <circle
            
              // style={{
                fill= "red"
                stroke = "green"
                stroke-width="4"
              // }}
              cx="60"
              cy="60"
              r="50"
            />
           <rect fill="brown" x="100" y= "100" height="300" width="300" rx="25" ry="25"/>
           <line x1= "40" y1="40" x2="80" y2="80" stroke="black"/>
           <polygon  fill="blue" points="30,30 100,400 10,70"/>
        </svg>
      </div>
    );
  }
}

export default App;
