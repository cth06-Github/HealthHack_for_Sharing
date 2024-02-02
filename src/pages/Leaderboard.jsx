// src/components/Leaderboard.js
import React, { useState } from "react";

const Leaderboard = () => {
  // Dummy data for the leaderboard
  const initialData = [
    { id: 1, name: "Player 1", score: 100 },
    { id: 2, name: "Player 2", score: 90 },
    { id: 3, name: "Player 3", score: 80 },
  ];

  const [leaderboardData, setLeaderboardData] = useState(initialData);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <body>
          {leaderboardData.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </body>
      </table>
    </div>
  );
};

export default Leaderboard;
