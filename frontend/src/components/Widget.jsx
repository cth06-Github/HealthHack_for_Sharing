// src/components/Widget.js
import React from "react";

const Widget = ({ title, value }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Widget;
