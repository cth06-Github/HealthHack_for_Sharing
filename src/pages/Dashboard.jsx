import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function DashBoard(props) {
  return (
    <>
      <Button1Row>
        <Link to="/Login">
          <Button1>
            <ButtonOverlay>
              <Logout>Logout</Logout>
            </ButtonOverlay>
          </Button1>
        </Link>
        <Logout1Stack>
          <Logout1>Logout</Logout1>
          <Link to="/Login">
            <Button2>
              <ButtonOverlay>
                <Leaderboard>Leaderboard</Leaderboard>
              </ButtonOverlay>
            </Button2>
          </Link>
        </Logout1Stack>
      </Button1Row>
      <Rect>
        <LoremIpsum>Lorem Ipsum</LoremIpsum>
      </Rect>
    </>
  );
}

const Button1 = styled.div`
  width: 181px;
  height: 60px;
  background-color: #E6E6E6;
  border-width: 3px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  margin-top: 6px;
  border-style: solid;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Logout = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 47px;
  width: 147px;
  font-size: 40px;
  text-align: center;
  margin-top: 7px;
  margin-left: 17px;
`;

const Logout1 = styled.span`
  font-family: Roboto;
  top: 6px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 47px;
  width: 147px;
  font-size: 40px;
  text-align: center;
`;

const Button2 = styled.div`
  top: 0px;
  left: 0px;
  width: 282px;
  height: 67px;
  position: absolute;
  background-color: #E6E6E6;
  border-width: 3px;
  border-color: #000000;
  border-radius: 22px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const Leaderboard = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 60px;
  width: 265px;
  font-size: 40px;
  text-align: center;
  margin-top: 6px;
  margin-left: 8px;
`;

const Logout1Stack = styled.div`
  width: 282px;
  height: 67px;
  margin-left: 1118px;
  position: relative;
`;

const Button1Row = styled.div`
  height: 67px;
  flex-direction: row;
  display: flex;
  margin-top: 775px;
  margin-left: 183px;
  margin-right: 156px;
`;

const Rect = styled.div`
  width: 838px;
  height: 382px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: -729px;
  margin-left: 155px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 162px;
  width: 508px;
  margin-top: 70px;
  margin-left: 70px;
`;

export default DashBoard;
