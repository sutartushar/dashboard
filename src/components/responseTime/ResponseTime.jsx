import styles from "./ResponseTime.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";

const ResponseTime = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../../ai-jsonData.json");
        setData(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.responseTime}>
      <h2>Response Time</h2>
      {data && (
        <div className={styles.container}>
          <Line
            data={{
              labels: data.response_times.day_wise.map((day) => day.date),
              datasets: [
                {
                  label: "Daily Average Response Time",
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                  data: data.response_times.day_wise.map(
                    (day) => day.average_time
                  ),
                },
              ],
            }}
          />
          <Line
            data={{
              labels: data.response_times.week_wise.map((week) => week.week),
              datasets: [
                {
                  label: "Weekly Average Response Time",
                  fill: false,
                  borderColor: "rgba(255, 99, 132, 1)",
                  data: data.response_times.week_wise.map(
                    (week) => week.average_time
                  ),
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ResponseTime;
