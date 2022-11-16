import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Activity from "../components/charts/Activity";
import Services from "../Services/Services";
import "../styles/header.css";
import "../styles/mini-cards.css";
import Sessions from "../components/charts/AverageSessions";
import Performance from "../components/charts/Performance";
import Score from "../components/charts/Score";
import Calories from "../components/mini-cards/Calories";
import Proteines from "../components/mini-cards/Proteines";
import Glucides from "../components/mini-cards/Glucides";
import Lipides from "../components/mini-cards/Lipides";

/**
 * function for display user dashboard
 * @param {string} - firstName
 * @param {object} - activity
 * @param {object} - sessions
 * @param {object} - performance
 * @param {object} - score
 * @param {number} - calories
 * @param {number} - proteines
 * @param {number} - glucides
 * @param {number} - lipides
 * @returns - components
 */

const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const [userAverageSessions, setAverageSessions] = useState();

  useEffect(() => {
    Services.getUserById(id).then((data) => {
      setUserData(data);
    });
    Services.getUserActivityById(id).then((data) => {
      setUserActivity(data);
    });
    Services.getUserAverageSessionById(id).then((data) => {
      setAverageSessions(data);
    });
    Services.getUserPerformanceById(id).then((data) => {
      setUserPerformance(data);
    });
  }, [id]);

  if (!userData || !userActivity || !userAverageSessions || !userPerformance) {
    return (
      <div>
        <h3 className="loading">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Header firstName={userData.firstName} />
      <div className="charts-mini-cards">
        <section className="charts">
          <article className="activity">
            <Activity userActivity={userActivity.sessions} />
          </article>
          <article className="sessions">
            <Sessions userAverageSessions={userAverageSessions.sessions} />
          </article>
          <article className="performance">
            <Performance userPerformance={userPerformance.data} />
          </article>
          <article className="score">
            <Score userData={userData.todayScore * 100} />
          </article>
        </section>
        <section className="mini-cards">
          <div className="calories">
            <Calories keyData={userData.calorie} />
          </div>
          <div className="proteines">
            <Proteines keyData={userData.proteine} />
          </div>
          <div className="glucides">
            <Glucides keyData={userData.glucide} />
          </div>
          <div className="lipides">
            <Lipides keyData={userData.lipide} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
