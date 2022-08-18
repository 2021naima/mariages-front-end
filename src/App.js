
import React, { useState, useEffect } from "react";
import DashboardNav from "./components/DashboardNav";
import Navbar from "./components/Navbar";

import Router from "./Router"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <DashboardNav />
      <Router/>

  
    </div>
  );
}

export default App;
