import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Activity from "../components/Charts/Activity";
import Services from "../Services/Services";
import "../styles/header.css";
import "../styles/mini-cards.css";
import Sessions from "../components/Charts/AverageSessions";
import Performance from "../components/Charts/Performance";
import Score from "../components/Charts/Score";
import Calories from "../components/Calories";
import Proteines from "../components/Proteines";
import Glucides from "../components/Glucides";
import Lipides from "../components/Lipides";

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
        <h3>Loading</h3>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Header firstName={userData.firstName} />
      <div className="charts-mini-cards">
        <section className="charts">
          <article className="activity">
            <Activity
              userActivity={userActivity.sessions || userActivity.data.sessions}
            />
          </article>
          <article className="sessions">
            <Sessions
              userAverageSessions={
                userAverageSessions.sessions ||
                userAverageSessions.data.sessions
              }
            />
          </article>
          <article className="performance">
            <Performance
              userPerformance={
                userPerformance.data.data || userPerformance.data
              }
            />
          </article>
          <article className="score">
            <Score
              userData={
                userData.todayScore * 100 ||
                userData.data.todayScore * 100 ||
                userData.data.score * 100
              }
            />
          </article>
        </section>
        <section className="mini-cards">
          <div className="calories">
            <Calories
              keyData={userData.calorie || userData.data.keyData.calorieCount}
            />
          </div>
          <div className="proteines">
            <Proteines
              keyData={userData.proteine || userData.data.keyData.proteinCount}
            />
          </div>
          <div className="glucides">
            <Glucides
              keyData={
                userData.glucide || userData.data.keyData.carbohydrateCount
              }
            />
          </div>
          <div className="lipides">
            <Lipides
              keyData={userData.lipide || userData.data.keyData.lipidCount}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
