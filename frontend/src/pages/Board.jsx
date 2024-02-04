
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useData } from '../components/DataContext';
import Button from '../components/Button'; 
import { Link } from "react-router-dom";
//import { data } from './Admin';
import LBoard from "../images/LBoard.png";



function Board() {
  const { inputValue } = useData();
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id)
  }

  //const sortedKeys = Object.keys(data).sort((a, b) => data[a]["Waste Generated / tons_latestImprovement"] - data[b]["Waste Generated / tons_latestImprovement"]);

  let toShow;
  if (inputValue) {
    toShow = inputValue;
  }
  else
  {
    toShow = "coming soon";
  }
  return (

    <div className = "App">
      <div>
    <h2>Your Weekly Challenge</h2>
    <p>{toShow}</p>
  </div>  

        <h1>Leaderboard</h1>
        <div className="footer">
            <button onClick={handleClick} data-id='7'>Waste Reduction Improvement</button>
            <button onClick={handleClick} data-id='30'>Goods Usage Improvement</button>
            <button onClick={handleClick} data-id='0'>Waste Reduction</button>
            <button onClick={handleClick} data-id='10'>Goods Usage</button>
        </div>
        <br>
        </br>
        <div>
        <img src = {LBoard} className = "image"></img>
        <p>taken from https://img.freepik.com/free-vector/leaderboard-with-abstract-background_52683-51485.jpg</p>
</div>


  <div className="footer">
    <Link to="/">
      <Button>Logout</Button>
    </Link>

    <Link to="/Dashboard">
      <Button >Dashboard</Button>
    </Link>
  </div>
  </div>

    
  )
}
export default Board;

/*
function sort(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}
*/

/*to revive later

  <div>
    <h2>My Object Mapping:</h2>
    {sortedKeys.map((key) => (
      <div key={key}>
        <h3>{key}:</h3>
        <ul>
          {Object.entries(data[key]).map(([property, value]) => (
            <li key={property}>
              {property}: {value}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div> */