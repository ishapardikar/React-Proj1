import React from "react";
import Navbar from "./Navbar/Navbar"; 
import "./App.css"
import Intro from "./Intro/Intro";
import Experience from "./Experience/Experience";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Experience/>
      
    </div>
  );
}

export default App;
