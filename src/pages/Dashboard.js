import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Header from "../components/Header";
import Services from "../Services/Services";

// let userFirstName = "";
// let userActivity = "";
// let userAverageSessions = "";
// let userPerformance = "";
const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  // const [userActivity, setUserActivity] = useState();
  // const [userPerformance, setUserPerformance] = useState();
  // const [userAverageSessions, setAverageSessions] = useState();

  useEffect(() => {
    Services.getUserById(id).then((data) => {
      setUserData(data);
      console.log(data.data.userInfos.firstName);
    });
    // Services.getUserActivityById(id).then((data) => {
    //   setUserActivity(data);
    //   console.log(data);
    // });
    // Services.getUserAverageSessionById(id).then((data) => {
    //   setAverageSessions(data);
    //   console.log(data);
    // });
    // Services.getUserPerformanceById(id).then((data) => {
    //   setUserPerformance(data);
    //   console.log(data);
    // });
  }, [id]);

  if (!userData) {
    return (
      <div>
        <h3>Loading</h3>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header>
        <p className="header-title">
          Bonjour {userData.data.userInfos.firstName}
        </p>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
    </div>
  );
};

export default Dashboard;
