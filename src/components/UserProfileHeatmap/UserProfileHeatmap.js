import React, { useState, useEffect } from "react";
import HeatMap from "@uiw/react-heat-map";
import axios from "axios";

const convertToObjectArray = (data) => {
  const result = [];

  for (const date in data) {
    if (data.hasOwnProperty(date)) {
      console.log(data[date]);
      if (data[date] === 99 || data[date] === 199 || data[date] === 1000) {
        result.push({ date: formatDate(date), count: data[date] });
      } else {
        if (!data[date]) {
          data[date] = 99;
        } else if (data[date] >= 1 && data[date] < 3) {
          data[date] = 199;
        } else if (data[date] >= 3) {
          data[date] = 1000;
        }
        result.push({ date: formatDate(date), count: data[date] });
      }
    }
  }

  return result;
};

const formatDate = (dateString) => {
  const [weekDay, month, day] = dateString.split("-");
  const currentYear = new Date().getFullYear();
  return `${currentYear}/${monthMap[month]}/${day}`;
};

const monthMap = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

const UserProfileHeatmap = () => {
  const [performance, setPerformance] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await axios.get(
          "http://localhost:5001/api/user/Performance",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const data = response.data;
        setPerformance(data);
      } catch (error) {
        // Handle error here
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const value = convertToObjectArray(performance);

  console.log(value);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        overflowX: "auto",
      }}
    >
      <HeatMap
        value={value}
        width={700}
        style={{ color: "#e88d15", fontFamily: "Manrope" }}
        startDate={new Date("2023/01/01")}
        panelColors={{
          0: "#001440",
          100: "#AF7AC5",
          200: "#884EA0",
          1000: "#702963",
        }}
        legendCellSize="0"
        onClick={null}
      />
    </div>
  );
};

export default UserProfileHeatmap;
