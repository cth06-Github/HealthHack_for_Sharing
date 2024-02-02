// src/components/Dashboard.js
import React from "react";
import Widget from "../components/Widget";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-container">
        <Widget title="Total Users" value="1000" />
        <Widget title="Revenue" value="$50,000" />
        <Widget title="Active Users" value="500" />
      </div>
    </div>
  );
};

export default Dashboard;
