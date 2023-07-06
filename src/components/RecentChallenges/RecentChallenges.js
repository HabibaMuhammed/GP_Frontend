import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RecentChallenges.css";
import RecentCard from "../RecentCard/RecentCard";

const RecentChallenges = () => {
  const [recentChallenges, setRecentChallenges] = useState([]);

  useEffect(() => {
    const fetchrecentchallenges = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const config = {
          headers: {
            Authorization: `${token}`,
          },
        };

        const response = await axios.get(
          "http://localhost:5001/api/user/Recentlabs",
          config
        );
        const data = response.data;
        setRecentChallenges(data.recentlabs);
        console.log("🚀 ~ file: RecentChallenges.js:25 ~ fetchrecentchallenges ~ data.recentlabs:", data.recentlabs)
      } catch (error) {
        console.error("Error fetching lab list:", error);
      }
    };

    fetchrecentchallenges();
  }, []);
  const imgbaseUrl = "http://localhost:5001/";

  return (
    <div className="RecentChallengesContainer">
      <div className="RecentChallengesSubContainer">
        <h2 className="RecentChallengesTitle">Recent Challenges:</h2>
        <div className="RecentChallengesBody">
          {
            recentChallenges.map((challenge, index) => {
              return (
                index<3 && <RecentCard img={`${imgbaseUrl}${challenge.lab_id.icon}`} name={challenge.lab_id.name} />
              );
            })
         }
        </div>
      </div>
    </div>
  );
};

export default RecentChallenges;
