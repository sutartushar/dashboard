import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
import styles from "./Dashboard.module.css";

const DashboardOverview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../../ai-jsonData.json");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.Category_Distribution}>
      <h2>Category Distribution</h2>
      {data && (
        <div className={styles.categoryContainer}>
          <Bar
            data={{
              labels: [
                "Small Talks",
                "Technical Supports",
                "Sales Inquiries",
                "Customer Service",
              ],
              datasets: [
                {
                  label: "Category Distribution",
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                  data: [
                    data.category_distribution.small_talk,
                    data.category_distribution.technical_support,
                    data.category_distribution.sales_inquiries,
                    data.category_distribution.customer_service,
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

export default DashboardOverview;
