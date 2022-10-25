import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Activity from "../components/Activity";
import Services from "../Services/Services";
import "../styles/header.css";

const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [userActivity, setUserActivity] = useState();
  // const [userPerformance, setUserPerformance] = useState();
  // const [userAverageSessions, setAverageSessions] = useState();

  useEffect(() => {
    Services.getUserById(id).then((data) => {
      setUserData(data);
    });
    Services.getUserActivityById(id).then((data) => {
      setUserActivity(data);
    });
    // Services.getUserAverageSessionById(id).then((data) => {
    //   setAverageSessions(data);
    //   console.log(data);
    // });
    // Services.getUserPerformanceById(id).then((data) => {
    //   setUserPerformance(data);
    //   console.log(data);
    // });
  }, [id]);

  if (!userData || !userActivity) {
    return (
      <div>
        <h3>Loading</h3>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Header firstName={userData.data.userInfos.firstName} />
      <div className="activity">
        <Activity userActivity={userActivity.data.sessions} />
      </div>
    </div>
  );
};

export default Dashboard;
