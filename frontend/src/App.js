import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./Routes";
import { DataProvider } from "./components/DataContext";
import '../src/pages/boardstyle.css';
import './App.css';


function App() {

  return (
    <BrowserRouter>
    <DataProvider>
      <RouteSwitch />

      
      </DataProvider>
    </BrowserRouter>

    
  );
}

export default App;
