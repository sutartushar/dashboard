import axios from "axios";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
import styles from "./UserReview.module.css";

const UserReview = () => {
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
    <div className={styles.userReview}>
      <h2>User Satisfaction</h2>
      {data && (
        <div className={styles.container}>
          <Pie
            data={{
              labels: data.user_satisfaction.ratings.map(
                (item) => `Ratings ${item.rating}`
              ),
              datasets: [
                {
                  label: "User Satisfaction",
                  data: data.user_satisfaction.ratings.map(
                    (item) => item.count
                  ),
                  hoverOffset: 4,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                  ],
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UserReview;
