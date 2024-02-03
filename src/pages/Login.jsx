import React, { Component } from "react";
import styled, { css } from "styled-components";
import inputField from "../components/dataFields";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Navigate to the next page
      history.push("/Dashboard");
    }
  };

  return (
    <body className="App loginPage">

      <div className="App loginPage headerRow">
        <h1>GreenHealth Challenge!</h1> 
      </div>

      
        <h2 style = {{fontSize: 40}} >User Login</h2>
        <div>
        <div className="box">
          <div className="box div">
            <h3>Email Address:</h3>
            <Placeholder placeholder="Email"></Placeholder>
          </div>

          <div className= "box div" style = {{paddingleft: 5}}>
            <h3>Password:</h3>
            <Placeholder placeholder="Password" ></Placeholder>
          </div>
      
          <div className="buttonbox">
          <Link to="/Dashboard">
            <button className="buttondesign" onKeyDown={handleKeyPress}>Login</button>
          </Link>
          </div>

      </div>
 </div>
</body>

  );
};

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border: none;
`;
const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
  text-align: center;
  margin-top: 270px;
`;

const Placeholder = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 40px;
  width: 300px;
  background-color: rgba(230, 230, 230, 1);
  border-width: 3px;
  border-color: #000000;
  border-radius: 17px;
  shadow-radius: 0px;
  border-style: solid;
  background: transparent;
  box-shadow: 3px 3px 0px 0.01px rgba(0, 0, 0, 1);
`;



const Enter = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 47px;
  width: 147px;
  font-size: 40px;
  text-align: center;
  margin-top: 6px;
  margin-left: 17px;
`;

export default Login;

/*cannot put className and id in headers tag...will not work...*/
/*wait maynot*/
/*real rason: cannot use top margin should never be negative...went ttoo high up!*/