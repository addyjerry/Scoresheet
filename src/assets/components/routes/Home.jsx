import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          "https://v3.football.api-sports.io/teams?country=england",
          {
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "ab417001b8d58328e1f99c009a69d4e2",
            },
          }
        );
        setTeams(response.data.response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching teams:", error);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Football Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.team.id}>{team.team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
