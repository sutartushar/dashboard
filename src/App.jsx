import DashboardOverview from "./components/dashboardoverview/DashboardOverview";
import ResponseTime from "./components/responseTime/ResponseTime";
import UsageStats from "./components/usageStats/UsageStats";
import UserReview from "./components/userReview/UserReview";

function App() {
  return (
    <div className="container">
      <div className="container1">
        <DashboardOverview />
      </div>
      <div className="container2">
        <ResponseTime />
      </div>
      <div className="container3">
        <UserReview />
      </div>
      <div className="container4">
        <UsageStats />
      </div>
    </div>
  );
}

export default App;
