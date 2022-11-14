import {
  activityData,
  averageSessionData,
  performanceData,
  userMainData,
} from "./classModel";
let env = "prod"; // switch "prod" (API) || "dev" (ApiMocked)

/**
 * Services for call API || APIMocked
 * @param {number} - user id
 * @returns {object} - data
 */

const Services = {
  getUserById: async function (id) {
    if (env === "prod") {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      const result = new userMainData(data.data);
      return result;
    } else {
      const response = await fetch("/data/ApiMocked.json");

      const json = await response.json();

      const data = json.USER_MAIN_DATA.find((user) => user.id === parseInt(id));

      const result = new userMainData(data);
      return result;
    }
  },

  getUserActivityById: async function (id) {
    if (env === "prod") {
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      const data = await response.json();
      const result = new activityData(data.data);
      return result;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_ACTIVITY.find((user) => user.id === parseInt(id));
      const result = new activityData(data);

      return result;
    }
  },

  getUserAverageSessionById: async function (id) {
    if (env === "prod") {
      const response = await fetch(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      const data = await response.json();
      const result = new averageSessionData(data.data);
      return result;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_AVERAGE_SESSIONS.find(
        (user) => user.id === parseInt(id)
      );
      const result = new averageSessionData(data);

      return result;
    }
  },

  getUserPerformanceById: async function (id) {
    if (env === "prod") {
      const response = await fetch(
        `http://localhost:3000/user/${id}/performance`
      );
      const data = await response.json();
      const result = new performanceData(data.data);
      return result;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_PERFORMANCE.find(
        (user) => user.id === parseInt(id)
      );
      const result = new performanceData(data);

      return result;
    }
  },
};

export default Services;
