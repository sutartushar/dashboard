import { useState, useEffect } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
import styles from "./UsageStats.module.css";

const UsageStats = () => {
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
    <div className={styles.usagesStats}>
      <h2>Usage Statistics by Platform</h2>
      {data && (
        <div className={styles.main_container}>
          <div>
            <Bar
              data={{
                labels: Object.keys(data.usage_statistics.by_platform),
                datasets: [
                  {
                    label: "Usage Statistics by Platform",
                    data: Object.values(data.usage_statistics.by_platform),
                    backgroundColor: ["#ff638433", "#36a2eb33", "#ffce5633"],
                    borderColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>

          <div>
            <Pie
              data={{
                labels: Object.keys(data.usage_statistics.by_country),
                datasets: [
                  {
                    label: "Usage Statistics by Country",
                    data: Object.values(data.usage_statistics.by_country),
                    backgroundColor: [
                      "#ff638433",
                      "#36a2eb33",
                      "#ffce5633",
                      "#4BC0C033",
                      "#9966FF33",
                    ],
                    borderColor: [
                      "#ff6384",
                      "#36a2eb",
                      "#ffce56",
                      "#4bc0c0",
                      "#9966FF",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UsageStats;
