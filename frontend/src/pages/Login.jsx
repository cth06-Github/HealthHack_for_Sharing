/*later edit the login routing if got time*/

import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectLogin, setIncorrectLogin] = useState(false); // Added state for incorrect login


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const handleLogin = () => {
    // Check if email is 'admin' and navigate accordingly
    if (email === 'admin' && password === 'admin') {
      navigate('/Admin');
    } 
    else if (email === 'user1' && password === 'user1') {
      navigate('/Dashboard');
    }
     else {
      // Incorrect login attempt
      setIncorrectLogin(true);
      console.log('Incorrect login attempt');
    }
  };

  return (
    <body className="App loginPage">
      <div className="App loginPage headerRow">
        <h1>GreenHealth Challenge!</h1>
      </div>

      <h2 style={{ fontSize: 40 }}>User Login</h2>
      <div>
        <div className="box" onKeyDown={handleKeyPress}>
          <div className="box div">
            <h3>Email Address:</h3>
            <Placeholder
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="box div">
            <h3>Password:</h3>
            <Placeholder
              type="password" // Set the type to password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="buttonbox">
            <Button onClick={handleLogin}>Login</Button>
          </div>
          <div>
          {incorrectLogin && (
            <ErrorText>
              Incorrect email or password. Please try again.
            </ErrorText>
          )}
          </div>
        </div>
      </div>
    </body>
  );
};

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
const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
`;

export default Login;

/*cannot put className and id in headers tag...will not work...*/
/*wait maynot*/
/*real rason: cannot use top margin should never be negative...went ttoo high up!*/