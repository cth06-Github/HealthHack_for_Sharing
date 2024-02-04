import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '../components/Button'; 
import graphTemp from "../images/graphTemp.png";

function DashBoard(props) {
  return (
    <div className = "App">
    <div>
      <h1>Department: XXX</h1>
    </div>

<div>
  <img src = {graphTemp}></img>
  <p>taken from https://www.gminsights.com/industry-analysis/medical-waste-management-market</p>
</div>

    <div className="footer">
    <Link to="/">
      <Button>Logout</Button>
    </Link>

    <Link to="/Board">
      <Button>Leaderboard</Button>
    </Link>
    </div>

    </div>
  );
}

export default DashBoard;
